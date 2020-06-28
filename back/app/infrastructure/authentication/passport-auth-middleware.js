const passport = require("passport");
const jwt = require("jsonwebtoken");
const { APIError } = require("../error");
const setupPassport = require("./setup-passport");

setupPassport(passport);

const passportAuthenticate = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
        if (err || !user) {
            next(new APIError("unauthorized", `Authentication failed: ${info}`));
        } else {
            next();
        }
    })(req, res);
};

const passportLogin = (req, res, next) => {
    passport.authenticate("local", { session: false }, (authError, user) => {
        if (authError || !user) {
            next(new APIError("unauthorized", "Authentication failed"));
        } else {
            req.login(user, { session: false }, (loginError) => {
                if (loginError) {
                    next(new APIError("unauthorized", "Login failed"));
                }

                const token = jwt.sign(user, process.env.jwt_secret);
                res.json({ ...user, token });
            });
        }
    })(req, res);
};

module.exports = { passportAuthenticate, passportLogin };
