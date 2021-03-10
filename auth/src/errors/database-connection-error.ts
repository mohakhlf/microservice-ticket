import { CustomError } from './custum-error';

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reson = 'Database connection error';

    constructor() {
        super('Database connection error');

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeError() {
        return [
            { message: this.reson }
        ]
    }
}