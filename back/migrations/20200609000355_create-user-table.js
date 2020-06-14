const up = (knex) => {
    return knex.schema.createTable("user", (table) => {
        table.string("login", 100).primary();
        table.string("firstname", 100);
        table.string("lastname", 100);
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
}

const down = (knex) => {
    return knex.schema.dropTableIfExists("user")
}

module.exports = { up, down };