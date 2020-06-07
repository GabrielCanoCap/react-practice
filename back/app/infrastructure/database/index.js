const knex = require("knex");

const instance = knex({
    client: "pg",
    version: 12,
    connection: {
        host: "db",
        port: 5432,
        user: "user",
        password: "password",
        database: "database"
    }
});

module.exports = instance; 