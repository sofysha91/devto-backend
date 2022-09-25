const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    description: {
        type: String
    },
    profile_photo: {
        type: String
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: "Email address is required",        
        match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
        ],
    },
    user_name: {
        type: String,
        minlength: 3,
        maxlength: 200,
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