const parkingRouterInjector = require("./parking/parking.router");

const globalRouterInjector = (app) => {
    parkingRouterInjector(app);
};

module.exports = globalRouterInjector;