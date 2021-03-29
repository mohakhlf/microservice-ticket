import mongoose from 'mongoose';
import 'dotenv/config';

import { app } from './app';

const PORT = process.env.PORT
const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('env JWT not undefined')
    }
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be undefined')
    }
    try {
            await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('connected to mongodb')
    } catch(err) {
        console.log(err);
    }

    app.listen(PORT, () => {
        console.log(`tickets service listening on port ${PORT}`)
        // console.log(`JWT env = ${process.env.JWT_KEY}`)
    });
}

start();