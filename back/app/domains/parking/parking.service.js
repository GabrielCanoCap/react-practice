const parkingDataAccess = require("./parking.data-access");
const { errorUtils: { APIError } } = require("infrastructure");

const getAll = async (pagination) => {
    const { offset: strOffset, limit: strLimit } = pagination;
    const offset = parseInt(strOffset);
    const limit = parseInt(strLimit);

    const result = await parkingDataAccess.selectAll({ offset, limit });
    return { ...result }
};

//TO DO
const getById = async (id) => {
    const result = await parkingDataAccess.selectById(id);
    if(!result) {
        throw new APIError("not_found");
    } 
    else {
        return result;
    }
}

//TO DO
const updateOneParking = () => {

}

//TO DO
const deleteOneParking = () => {

}

//TO DO
const createOneParking = () => {

}

module.exports = {
    getAll, getById, updateOneParking, deleteOneParking, createOneParking
};