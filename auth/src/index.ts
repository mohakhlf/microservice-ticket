import express from 'express';
import  { json } from 'body-parser';
import 'dotenv/config';

import { currentuserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middleware/error-handler';
const PORT = process.env.PORT

const app = express();
app.use(json());

app.use(currentuserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`auth service listening on port ${PORT}`)
});