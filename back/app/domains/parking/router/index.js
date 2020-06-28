const router = require("express-promise-router")();
const { authentication, schemaValidator } = require("infrastructure");
const parkingService = require("../services");
const { parkingListSchema, parkingSchema } = require("./schema");

const { authenticationMiddleware } = authentication;

router.get("/", schemaValidator(parkingListSchema), async (req, res) => {
    const result = await parkingService.getAll(req.value);
    res.send({ success: true, result });
});

router.get("/:id", schemaValidator(parkingSchema.tailor("get")), async (req, res) => {
    const result = await parkingService.getById(req.value.id);
    res.send({ success: true, result });
});

router.put("/:id", schemaValidator(parkingSchema.tailor("put")), async (req, res) => {
    const result = await parkingService.updateParking(req.value);
    res.send({ success: true, result });
});

router.delete("/:id", schemaValidator(parkingSchema.tailor("delete")), async (req, res) => {
    const result = await parkingService.deleteParking(req.value.id);
    res.send({ success: true, result });
});

router.post("/", schemaValidator(parkingSchema.tailor("post")), async (req, res) => {
    const result = await parkingService.createParking(req.value);
    res.send({ success: true, result });
});

const routerInjector = (app) => {
    app.use("/parking", authenticationMiddleware, router);
};

module.exports = routerInjector;
