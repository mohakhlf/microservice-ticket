import { ValidationError } from 'express-validator';
import { CustomError } from './custum-error';

export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(public errors: ValidationError[]) {
        super('Invalid request parmeters');
        
        // Because we are building class that extends Error
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeError() {
        return this.errors.map(err => {
            return { message: err.msg, field: err.param };
        })
    }
}