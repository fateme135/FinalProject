const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    avatar: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    phonenumber: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
    },
    sex: {
        type: String,

    },

    // code: {
    //     type: String,
    //     unique: true,
    //     required: true
    // } 
});
module.exports = mongoose.model('user', user);