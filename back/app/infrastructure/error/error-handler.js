const { v4: uuid } = require("uuid");
const { httpMessageMap, errorCodeMap } = require("config").errorConfig;
const logger = require("../logger");

const APIError = require("./api-error");

const errorHandler = (err, req, res, next) => {
    // Generate an unique correlation id
    const id = uuid();
    // If the error is an instance of APIError
    if (err.name === APIError.name) {
        // Retrieve errorCode from config
        const errorCode = errorCodeMap[err.code] ? err.code : "UNKNOWN";
        if (!errorCodeMap[err.code]) {
            logger.warn(`Unkown error code "${err.code}", default set to "UNKNOWN`);
        }

        const errorInfo = errorCodeMap[errorCode];

        // Retrieve defined http code and associate message from config
        const httpCode = httpMessageMap[`${errorInfo.httpCode}`] ? errorInfo.httpCode : 500;
        if (!httpMessageMap[`${errorInfo.httpCode}`]) {
            logger.warn(`Unknown Http code "${errorCode.httpCode}", default set to 500`);
        }

        // Log the error
        logger.error(`[${id}] - ${errorCode} : ${errorInfo.logMessage}`);
        logger.error(`[${id}]\n${err.stack}`);

        // Send response
        res.status(httpCode);
        res.send({ id, error: httpMessageMap[`${httpCode}`] });
    } else {
        logger.error(`[${id}] - ${err.stack}`);
        const { httpCode } = errorCodeMap.UNKNOWN;
        res.status(httpCode);
        res.send({ id, error: httpMessageMap[`${httpCode}`] });
    }
};

module.exports = errorHandler;
