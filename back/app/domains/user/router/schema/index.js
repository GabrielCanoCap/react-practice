const joi = require("@hapi/joi");
const { paginationSchema, accessTokenSchema } = require("../../../global-schema");

const userListSchema = joi.object({ ...paginationSchema, ...accessTokenSchema });

const userSchema = joi.object({
    ...accessTokenSchema,
    login: joi.string().max(100).required(),
}).alter({
    get: (schema) => schema,
    delete: (schema) => schema,
    post: (schema) => schema.keys({
        firstname: joi.string().max(100),
        lastname: joi.string().max(100),
    }),
    put: (schema) => schema.keys({
        firstname: joi.string().max(100),
        lastname: joi.string().max(100),
    }),
});

const userAuthSchema = joi.object({
    login: joi.string().required(),
    password: joi.custom(() => "password").default("password"),
});

module.exports = { userListSchema, userSchema, userAuthSchema };
