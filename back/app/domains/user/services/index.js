const userDataAccess = require("../data-access");

const createUser = async (data) => userDataAccess.insertUser(data);

const getUser = async (pagination) => userDataAccess.selectUser(pagination);

const getUserByLogin = async (login) => userDataAccess.selectUserByLogin(login);

const updateUser = async (data) => userDataAccess.updateUser(data);

const deleteUser = async (login) => userDataAccess.deleteUser(login);

module.exports = {
    createUser, getUser, getUserByLogin, updateUser, deleteUser,
};
