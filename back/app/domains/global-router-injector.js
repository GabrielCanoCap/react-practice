const parkingRouterInjector = require("./parking/router");
const userRouterInjector = require("./user/router");

const globalRouterInjector = (app) => {
    parkingRouterInjector(app);
    userRouterInjector(app);
};

module.exports = globalRouterInjector;
