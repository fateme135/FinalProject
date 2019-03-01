const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = new Schema({
    username: {
        type: String,
        // unique: true,
        required: true,
    },
    firstname: {
        type: String,
        // unique: true,
        required: true,
    },
    lastname: {
        type: String,
        // unique: true,
        required: true,
    },
 
    password: {
        type: String,
        // unique: true,
        required: true,
    },
 
    phonenumber: {
        type: Number,
        required: true,
    },
    sex: {
        type:Boolean,
        // required: true,
    },
    // role: {
    //     type: String,
    //     // unique: true,
    //     required: true,
    // },
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