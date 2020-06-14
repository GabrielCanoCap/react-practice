const joi = require("@hapi/joi");
const router = require("express-promise-router")();
const parkingService = require("./services");
const { logger, errorUtils } = require("infrastructure");
const { APIError } = errorUtils;

router.get("/", async (req, res) => {
    const schema = joi.object({
        offset: joi.string().pattern(/^[0-9]+$/),
        limit: joi.ref("offset")
    });

    const { value, error } = schema.validate(req.query);
    if(error){
        throw new APIError("bad_request", error);
    }

    const { offset = "0", limit = "10" } = value;
    const result = await parkingService.getAll({ offset, limit });
    res.send({ success: true, result });
});

router.get("/:id", async (req, res) => {
    const schema = joi.object({
        id: joi.string.required()
    })

    const { value: data, error } = schema.validate(req.params);
    if(error){
        throw new APIError("bad_request", error);
    }

    const result = await parkingService.getById(data.id);
    res.send({ success: true, result });
})

router.put("/:id", async (req, res) => {
    const schema = joi.object({
        id: joi.string().required(),
        address: joi.string(),
        available_places: joi.number().min(0),
        price_per_day: joi.number().min(0),
        contact: joi.string(),
        city: joi.string(),
        type: joi.string().pattern(/^(both|int|ext)$/i)
    })
    
    const { value: data, error } = updateSchema.validate({...req.body, ...req.params});
    if(error){
        throw new APIError("bad_request", error);
    }
    const result = await parkingService.updateParking(data);
    res.send({ success: true, result });
})

router.post("/", async (req, res) => {
    const schema = joi.object({
        address: joi.string(),
        available_places: joi.number().min(0),
        price_per_day: joi.number().min(0),
        contact: joi.string(),
        city: joi.string(),
        type: joi.string().pattern(/^(both|int|ext)$/i)
    })
    
    const { value: data, error } = updateSchema.validate(req.body);
    if(error){
        throw new APIError("bad_request", error);
    }
    
    const result = await parkingService.createParking(data);
    res.send({ success: true, result });
});

router.delete("/:id", async (req, res) => {
    const schema = joi.object({
        id: joi.string().required()
    })

    const { value, error } = schema.validate(req.body);
    if(error){
        throw new APIError("bad_request", error);
    }

    const result = await parkingService.deleteParking(value.id);
    res.send({ success: true, result });
})

const routerInjector = (app) => {
    app.use("/parking", router)
}

module.exports = routerInjector;