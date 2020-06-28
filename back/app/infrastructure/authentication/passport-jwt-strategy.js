const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const database = require("../database");
const { APIError } = require("../error");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.jwt_secret,
};

const passportJwtStrategy = new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
        const user = await database("user").select().where({ login: jwtPayload.login });
        // const user = { test: "test" };
        if (user) {
            return done(null, user);
        }
        throw new APIError("unauthorized");
    } catch (error) {
        return done(error, false);
    }
});

module.exports = passportJwtStrategy;
