const up = (knex) => {
    return knex.schema.createTable("parkings", (table) => {
        table.increments("id");
        table.string("technical_id", 36).notNullable();
        table.string("address", 255).nullable().defaultTo(null);
        table.integer("available_places").nullable();
        table.integer("price_per_day").nullable();
        table.string("contact").nullable().defaultTo(null);
        table.string("city").notNullable();
        table.string("type").nullable().defaultTo(null);
    });
};

const down = (knex) => {
    return knex.schema.dropTableIfExists("parkings");
};

module.exports = { up, down };