const joi = require("@hapi/joi");
const router = require("express-promise-router")();
const userService = require("./services");
const { errorUtils, authentication } = require("infrastructure");
const { APIError } = errorUtils;
const { authenticationMiddleware } = authentication;

router.get("/", async (req, res) => {
    const schema = joi.object({
        offset: joi.string().pattern(/^[0-9]+$/),
        limit: joi.ref("offset"),
        accessToken: joi.string()
    });
    
    const { value, error } = schema.validate(req.query);
    if(error){
        throw new APIError("bad_request", error);
    }
    
    const { offset = "0", limit = "10" } = value;
    const result = await userService.getUser({ offset, limit });
    res.send({ success: true, result });
});

router.get("/:login", async (req, res) => {
    const schema = joi.object({
        login: joi.string().required()
    })
    
    const { value: data, error } = schema.validate(req.params);
    if(error){
        throw new APIError("bad_request", error);
    }

    const result = await userService.getUserByLogin(data.login);
    res.send({ success: true, result });
})

router.put("/:id", async (req, res) => {
    const schema = joi.object({
        login: joi.string().max(100).required(),
        firstname: joi.string().max(100),
        lastname: joi.string().max(100)
    });
    
    const { value: data, error } = schema.validate({...req.body, ...req.params});
    if(error){
        throw new APIError("bad_request", error);
    }
    
    const result = await userService.updateUser(data);
    res.send({ success: true, result });
})

router.post("/", async (req, res) => {
    const schema = joi.object({
        login: joi.string().max(100).required(),
        firstname: joi.string().max(100).required(),
        lastname: joi.string().max(100).required()
    });
    
    const { value: data, error } = schema.validate(req.body);
    if(error){
        throw new APIError("bad_request", error);
    }
    
    const result = await userService.createUser(data);
    res.send({ success: true, result });
});

router.delete("/:login", async (req, res) => {
    const schema = joi.object({
        login: joi.string().required()
    })

    const { value: data, error } = schema.validate(req.body);
    if(error){
        throw new APIError("bad_request", error);
    }

    const result = await userService.deleteUser(data.login);
    res.send({ success: true, result });
})

const routerInjector = (app) => {
    app.use("/user", authenticationMiddleware, router);
}

module.exports = routerInjector;