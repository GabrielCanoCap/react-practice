const APIError = require("../error/api-error");

const validateSchema = (schema) => (req, res, next) => {
    const { query = {}, body = {}, params = {} } = req;
    const inputValue = { ...query, ...body, ...params };
    const { value, error } = schema.validate(inputValue);

    if (error) {
        throw new APIError("bad_request", error);
    } else {
        req.value = value;
        next();
    }
};

module.exports = validateSchema;
