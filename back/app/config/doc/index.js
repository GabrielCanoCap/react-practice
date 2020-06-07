const swaggerUIExpress = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");

const docRouterInjector = app => {
    try {
        const swaggerDef = JSON.parse(fs.readFileSync(path.join(__dirname, "../../../doc/specs.json")));
        app.use("/doc", swaggerUIExpress.serve, swaggerUIExpress.setup(swaggerDef));
    } catch (error) {
        console.info("Unable to load the openapi documentation");
    }
};

module.exports = docRouterInjector

