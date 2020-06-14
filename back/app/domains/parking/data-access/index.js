const { database } = require("infrastructure");
const { v4: uuid } = require("uuid")

const parkingSchemaName = "parking"

const selectAll = async (pagination) => {
    const { offset, limit } = pagination;
    const query = database(parkingSchemaName).select().offset(offset).limit(limit);
    const totalQueryResult = await database(parkingSchemaName).select().count();
    const result = await query;
    const total = parseInt(totalQueryResult[0].count);

    return {
        limit, offset, total,
        result
    };
};

const selectParkingById = async (technical_id) => database(parkingSchemaName).select().where({technical_id}).first();

const insertParking = async (data) => {
    const technical_id = uuid();
    await database(parkingSchemaName).insert({ technical_id, ...data});
    return selectById(technical_id);
}

const deleteParking = async (technical_id) => database(parkingSchemaName).where({ technical_id }).del();

const updateParking = async ({ id, ...data }) => {
    await database(parkingSchemaName).update(data).where({ technical_id: id });
    return selectParkingById(id);
}

module.exports = { 
    selectAll, selectParkingById, insertParking, deleteParking, updateParking
};