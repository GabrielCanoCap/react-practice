const up = (knex) => {
    return knex.schema.createTable("parking", (table) => {
        table.string("technical_id").primary();
        table.string("address").notNullable();
        table.integer("available_places").notNullable();
        table.integer("price_per_day").notNullable();
        table.string("contact").notNullable();
        table.string("city").notNullable();
        table.string("type").notNullable();
    });
};

const down = (knex) => {
    return knex.schema.dropTableIfExists("parking");
};

module.exports = { up, down };