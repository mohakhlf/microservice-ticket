import mongoose from 'mongoose';

import { app } from './app';

const PORT = process.env.PORT
const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('env JWT not undefined')
    }
    try {
            await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('connected to mongodb')
    } catch(err) {
        console.log(err);
    }

    app.listen(PORT, () => {
        console.log(`auth service listening on port ${PORT}`)
        // console.log(`JWT env = ${process.env.JWT_KEY}`)
    });
}

start();