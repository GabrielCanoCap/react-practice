const parkingDataAccess = require("../data-access");
const { errorUtils: { APIError } } = require("infrastructure");

const getAll = async (pagination) => {
    const { offset: strOffset, limit: strLimit } = pagination;
    const offset = parseInt(strOffset);
    const limit = parseInt(strLimit);

    const result = await parkingDataAccess.selectAll({ offset, limit });
    return { ...result }
};

const getById = async (id) => {
    const result = await parkingDataAccess.selectParkingById(id);
    if(!result) {
        throw new APIError("not_found");
    } else {
        return result;
    }
}

const updateParking = async (data) => parkingDataAccess.updateParking(data);

//TO DO
const deleteParking = async (id) => parkingDataAccess.deleteParking(id);

//TO DO
const createParking = async (data) => parkingDataAccess.insertParking(data);

module.exports = {
    getAll, getById, updateParking, deleteParking, createParking
};