const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    post_title: {
        type: String,
        required: true
    },
    post_body: {
        type: String,
        required: true
    },
    post_banner: {
        type: String,
    },
    post_date: {
        type: Date,
    },
    tags: {
        type: [String]
    },
    likes: {
        type: Number
    },
    user: 
        {
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
            registration_date: {
                type: Date
            },
            location: {
                type: String
            },
            education: {
                type: String
            },
        }
           
});

module.exports = mongoose.model("post", postSchema);