const User = require("../models/user.model");
const bcrypt = require("bcrypt");

//Use Cases = Handlers

const createUser = async (userData) => {
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const user = User.create({...userData, password: hashPassword});
    return user;
}

module.exports = { createUser }