const parkingRouterInjector = require("./parking/parking.router");
const userRouterInjector = require("./user/user.router");

const globalRouterInjector = (app) => {
    parkingRouterInjector(app);
    userRouterInjector(app);
};

module.exports = globalRouterInjector;