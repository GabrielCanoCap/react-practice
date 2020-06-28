const authenticationMiddleware = require("./authentication-middleware");
const passportJwtStrategy = require("./passport-jwt-strategy");
const passportLocalStrategy = require("./passport-local-strategy");
const { passportAuthenticate, passportLogin } = require("./passport-auth-middleware");
const setupPassport = require("./setup-passport");

module.exports = {
    authenticationMiddleware,
    passportAuthenticate,
    passportLogin,
    passportJwtStrategy,
    passportLocalStrategy,
    setupPassport,
};
