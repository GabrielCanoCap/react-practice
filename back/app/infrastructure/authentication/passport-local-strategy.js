const { Strategy: LocalStrategy } = require("passport-local");
const database = require("../database");

const opts = {
    usernameField: "login",
    passwordField: "password",
};

const passportLocalStrategy = new LocalStrategy(opts, async (login, password, done) => {
    try {
        const user = await database("user").select().where({ login }).first();
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
});

module.exports = passportLocalStrategy;
