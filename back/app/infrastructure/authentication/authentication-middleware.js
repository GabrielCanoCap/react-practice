const { APIError } = require("../error");
const { passportAuthenticate } = require("./passport-auth-middleware");

const authenticationMiddleware = (req, res, next) => {
    const { accessToken, ...restQuery } = req.query;
    if (!accessToken) {
        passportAuthenticate(req, res, next);
    } else if (accessToken !== process.env.admin_access_token) {
        throw new APIError("unauthorized", "Invalid access token");
    } else {
        req.query = restQuery;
        next();
    }
};

module.exports = authenticationMiddleware;
