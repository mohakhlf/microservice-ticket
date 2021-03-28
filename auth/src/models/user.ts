import mongoose,  {Document, Model} from 'mongoose';
import { Password } from '../services/password';
/*
* Interface that describes the properties
* that are required to create a new User
*/
interface UserAttrs {
    email: string;
    password: string;
  }

/**
* Interface that describes the properties
* that User Model has
*/
interface UserModel extends Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
  }

/**
 * Interface that describes the properties
 * that User Document has
 */
interface UserDoc extends Document {
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;
    }
  }
});

userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
      const hashed = await Password.toHash(this.get('password'));
      this.set('password', hashed);
    }
    done();
  });

/**
 * Method to create a user that return a user
 * @param attrs
 * @returns 
 */
userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}
const User = mongoose.model<UserDoc ,UserModel>('User', userSchema);

export { User };