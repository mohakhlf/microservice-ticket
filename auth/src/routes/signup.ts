import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { DatabaseConnectionError } from '../errors/database-connection-error';
import { RequestValidationError  } from '../errors/request-validation-errors';

const router = express.Router();
/*
* Description: route to get the current user
*/
router.post('/api/users/signup', 
[
    body('email')
        .isEmail()
        .withMessage('Email must be provided'),
    body('password')
        .trim()
        .isLength({min: 4, max: 20})
        .withMessage('Password must be between 4 & 20 characters')
],  (req: Request, res: Response) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    } 

    const { email, password } = req.body;

    console.log('Creating a user...');
    throw new DatabaseConnectionError();
    
    res.send({})
});

export { router as signupRouter };