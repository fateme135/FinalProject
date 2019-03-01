const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
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
        type: Number,
        required: true,
    },
    // sex: {
    //     type:Boolean,
    //     // required: true,
    // },
    role: {
        type: String,
        required: true,
    },
    // Picture: {
    //     type: String,
    //     required: true,
    // },
    // code: {
    //     type: String,
    //     unique: true,
    //     required: true
    // } 
});
module.exports = mongoose.model('user', user);