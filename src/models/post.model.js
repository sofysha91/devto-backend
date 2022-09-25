const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    post_title: {
        type: String,
        required: true,
        index: true
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
        type: [String]
    },
    read_time: {
        type: Number,
        default: 1 
    },
    comments : {
        type: [
            {
                author: {
                    type: String
                },
                content: {
                    type: String
                },
                date :{
                    type: Date,
                    default: new Date()
                }
            }        
        ]
    },
    user: 
        {
            _id: {
                type: String 
            },
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
                maxlength: 200,
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

postSchema.index({'post_title': 'text','user.user_name': 'text', 'tags':'text'});

module.exports = mongoose.model("post", postSchema);

