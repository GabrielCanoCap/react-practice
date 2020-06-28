const { database } = require("infrastructure");

const userSchemaName = "user";

const insertUser = async (data) => database(userSchemaName).insert(data).returning("*");

const selectUser = async (pagination) => {
    const { offset, limit } = pagination;
    const countResult = await database(userSchemaName).select().count();
    const result = await database(userSchemaName).offset(offset).limit(limit).select();

    return {
        limit,
        offset,
        total: countResult[0].count,
        result,
    };
};

const selectUserByLogin = async (login) => database(userSchemaName).select()
    .where({ login }).first();

const updateUser = async (user) => {
    const { login, ...data } = user;
    return database(userSchemaName).update(data).where({ login }).returning("*");
};

const deleteUser = async (login) => database(userSchemaName).del().where({ login });

module.exports = {
    insertUser, selectUser, selectUserByLogin, updateUser, deleteUser,
};
