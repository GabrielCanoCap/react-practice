const router = require("express-promise-router")();
const { authentication, schemaValidator } = require("infrastructure");
const userService = require("../services");
const { userListSchema, userSchema, userAuthSchema } = require("./schema");

const { authenticationMiddleware, passportLogin } = authentication;

router.get("/", authenticationMiddleware, schemaValidator(userListSchema), async (req, res) => {
    const { offset, limit } = req.value;
    const result = await userService.getUser({ offset, limit });
    res.send({ success: true, result });
});

router.get("/:login", authenticationMiddleware, schemaValidator(userSchema.tailor("get")), async (req, res) => {
    const result = await userService.getUserByLogin(req.value.login);
    res.send({ success: true, result });
});

// TODO: handle 404 when user not found
router.put("/:id", authenticationMiddleware, schemaValidator(userSchema.tailor("put")), async (req, res) => {
    const result = await userService.updateUser(req.value);
    res.send({ success: true, result });
});

// TODO: handle 404 when user not found
router.delete("/:login", authenticationMiddleware, schemaValidator(userSchema.tailor("delete")), async (req, res) => {
    const result = await userService.deleteUser(req.value.login);
    res.send({ success: true, result });
});

router.post("/authenticate", schemaValidator(userAuthSchema), (req, res, next) => {
    req.body = req.value;
    passportLogin(req, res, next);
});

router.post("/", authenticationMiddleware, schemaValidator(userSchema.tailor("post")), async (req, res) => {
    const result = await userService.createUser(req.value);
    res.send({ success: true, result });
});

const routerInjector = (app) => {
    app.use("/user", router);
};

module.exports = routerInjector;
