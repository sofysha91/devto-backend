const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    description: {
        type: String
    },
    profile_photo: {
        type: String
    },
    email: {
        type: String
    },
    user_name: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    registration_date: {
        type: Date
    },
    location: {
        type: String
    },
    education: {
        type: String
    },
    savedPost: {
        type: [String]
    },
})

module.exports = mongoose.model("user", userSchema);