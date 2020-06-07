/**
 * Create an Error
 * @param {string} code The code of the Error see [the config file]{@link /app/config/error-code-map.js}  
 * @param {string} [message = ""] Additionnal information about the error
 */

const APIError = function (code, message = "") {
    const instance = new Error(message);
    instance.name = "APIError";
    this.code = code;

    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    Error.captureStackTrace(instance, APIError);

    return instance;
}

APIError.prototype = Object.create(Error.prototype, {
    constructor: {
        value: Error,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

Object.setPrototypeOf(APIError, Error);

module.exports = APIError;