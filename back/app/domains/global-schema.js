const joi = require("@hapi/joi");

const accessTokenSchema = {
    accessToken: joi.string(),
};

const paginationSchema = {
    offset: joi
        .number()
        .min(0)
        .default(0),
    limit: joi.number().min(1).default(10),
};

module.exports = { accessTokenSchema, paginationSchema };
