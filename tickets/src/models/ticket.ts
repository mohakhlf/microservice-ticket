import mongoose,  {Document, Model} from 'mongoose';

/**
 * Interface that describes the properties
 * that are required to create a new Ticket
 */
interface TicketAttrs {
  title: string;
  price: string;
  userId: string;
}

/**
 * Interface that describes the properties
 * that Ticket Document has
 */
 interface TicketDoc extends Document {
  title: string;
  price: string;
  userId: string
}

/**
 * Interface that describes the properties
 * that Ticket Model has
 */
interface TicketModel extends Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
{
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    }
  }
});

ticketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs);
};

const Ticket = mongoose.model<TicketDoc, TicketModel>('Ticket', ticketSchema);

export { Ticket };