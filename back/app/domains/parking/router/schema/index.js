const joi = require("@hapi/joi");
const { accessTokenSchema, paginationSchema } = require("../../../global-schema");

const parkingListSchema = joi.object(paginationSchema);

const parkingSchema = joi.object({
    ...accessTokenSchema,
    id: joi.string().required(),
}).alter({
    get: (schema) => schema,
    post: (schema) => schema.keys({
        id: joi.forbidden(),
        address: joi.string(),
        available_places: joi.number().min(0),
        price_per_day: joi.number().min(0),
        contact: joi.string(),
        city: joi.string(),
        type: joi.valid("both", "int", "ext"),
    }),
    put: (schema) => schema.keys({
        address: joi.string(),
        available_places: joi.number().min(0),
        price_per_day: joi.number().min(0),
        contact: joi.string(),
        city: joi.string(),
        type: joi.string().valid("both", "int", "ext"),
    }),
    delete: (schema) => schema,
}).unknown(false);

module.exports = {
    paginationSchema,
    parkingListSchema,
    parkingSchema,
};
