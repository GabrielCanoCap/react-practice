const userDataAccess = require("../data-access");

// TO DO
const createUser = async (data) => userDataAccess.insertUser(data);

// TO DO
const getUser = async (pagination) => userDataAccess.selectUser(pagination);

// TO DO
const getUserByLogin = async (login) => userDataAccess.selectUserByLogin(login);

// TO DO
const updateUser = async (data) => userDataAccess.updateUser(data);

// TO DO
const deleteUser = async (login) => userDataAccess.deleteUser(login);

module.exports = { createUser, getUser, getUserByLogin, updateUser, deleteUser };