const passportJwtStrategy = require("./passport-jwt-strategy");
const passportLocalStrategy = require("./passport-local-strategy");

const setupPassport = (passport) => {
    passport.initialize();
    passport.use(passportLocalStrategy);
    passport.use(passportJwtStrategy);
};

module.exports = setupPassport;