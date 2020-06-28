const pack = require("../../../package.json");

const { API_HOST_URL = "localhost:3000" } = process.env;
const apiVersion = pack.version;

const swaggerDef = {
    openapi: "3.0.2",
    info: {
        title: "api doc title",
        version: apiVersion,
        description: "api decsription",
        contact: {
            name: "Gabriel Cano",
            email: "gabriel.cano@capgemini.com"
        },
    },
    servers: [
        { url: `http://${API_HOST_URL}`}
    ],
    tags: [
        {
            name: "parking",
            description: "Operation relative to the parking entity"
        },
        {
            name: "user",
            description: "Operation relative to the parking entity"
        }
    ]
}

module.exports = swaggerDef;