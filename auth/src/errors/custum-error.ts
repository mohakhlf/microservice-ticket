export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);

        // Because we are building class that extends Error
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeError(): { message: string, field?: string}[]
}