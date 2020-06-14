const knex = require("knex");

const instance = knex({
    client: "pg",
    version: 12,
    connection: {
        host: process.env.pg_host,
        port: process.env.pg_port,
        user: process.env.pg_user,
        password: process.env.pg_password,
        database: process.env.pg_database
    }
});

module.exports = instance; 