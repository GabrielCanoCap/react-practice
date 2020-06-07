const { database, errorUtils: { APIError } } = require("infrastructure");
const selectAll = async (pagination) => {
    const { offset, limit } = pagination;
    const query = database("parkings").select().offset(offset).limit(limit);
    const totalQueryResult = await database("parkings").select().offset(offset).limit(limit).count();
    const result = await query;
    const total = parseInt(totalQueryResult[0].count);

    return {
        limit, offset, total,
        result
    };
};

const selectById = async (technical_id) => database("parkings").select().where({technical_id}).first();

module.exports = { selectAll, selectById };