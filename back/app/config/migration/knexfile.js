// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.pg_database,
      host: process.env.pg_host,
      port: process.env.pg_port,
      user: process.env.pg_user,
      password: process.env.pg_password
    },
    migrations: {
      directory: "../../../migrations",
      stub: "migration_template.js"
    },
    seeds: {
      directory: "../../../seeds",
      stub: "seed_template.js"
    }
  }
};
