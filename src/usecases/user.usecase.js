const User = require("../models/user.model");
const bcrypt = require("bcrypt");

//Use Cases = Handlers

const createUser = async (userData) => {
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const user = User.create({...userData, password: hashPassword});
    return user;
}

const getUser = (id) => {
    const user = User.findById(id)
    return user;
}

const updateUser = async (id, userData) => {
    const hashPassword = await bcrypt.hash(userData.password, 10);
    const user = User.findByIdAndUpdate(id,{...userData, password: hashPassword});
    return user;
}
   
const deleteUser = (id) => {
    const user = User.findByIdAndDelete(id);
    return user;
}
   

module.exports = { 
createUser,
getUser,
updateUser, 
deleteUser
}
