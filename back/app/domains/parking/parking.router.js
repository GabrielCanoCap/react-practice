const router = require("express-promise-router")();
const parkingService = require("./parking.service");
const { logger } = require("infrastructure");

router.get("/", async (req, res) => {
    const { offset = "0", limit = "10" } = req.query;
    const result = await parkingService.getAll({ offset, limit });
    res.send({ success: true, result });
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await parkingService.getById(id);
    res.send(result);
})

router.put("/:id", (req, res) => {

})

router.post("/", (req, res) => {

});

router.delete("/:id", (req, res) => {

})

const routerInjector = (app) => {
    app.use("/parking", router)
}

module.exports = routerInjector;