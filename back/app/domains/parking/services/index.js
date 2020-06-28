const { errorUtils: { APIError } } = require("infrastructure");
const parkingDataAccess = require("../data-access");

const getAll = async (pagination) => {
    const { offset, limit } = pagination;
    const result = await parkingDataAccess.selectAll({ offset, limit });
    return { ...result };
};

const getById = async (id) => {
    const result = await parkingDataAccess.selectParkingById(id);
    if (!result) {
        throw new APIError("not_found");
    } else {
        return result;
    }
};

const updateParking = async (data) => parkingDataAccess.updateParking(data);

const deleteParking = async (id) => parkingDataAccess.deleteParking(id);

const createParking = async (data) => parkingDataAccess.insertParking(data);

// TODO
// eslint-disable-next-line no-unused-vars
const searchParking = async (query, pagination) => {};

module.exports = {
    getAll, getById, updateParking, deleteParking, createParking, searchParking,
};
