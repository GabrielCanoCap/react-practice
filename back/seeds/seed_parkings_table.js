const faker = require("faker/locale/fr");
faker.seed(42);

const generateTuple = () => {
    return {
        technical_id: faker.random.uuid(),
        address: faker.address.streetAddress(),
        available_places: faker.random.number({ min: 10, max: 200 }),
        price_per_day: faker.random.number({ min: 300, max: 6000}),
        contact: faker.internet.email(),
        city: faker.address.city(),
        type: faker.random.arrayElement([ "INT", "EXT", "BOTH" ])
    }
}

const seed = async (knex) => {
    // Deletes ALL existing entries
    await knex("parking").del();
    // Inserts seed entries
    const fakeData = Array.from(Array(300), generateTuple);
    return knex("parking").insert(fakeData);
};

module.exports = { seed };