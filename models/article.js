const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const article = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
     type: Date,
     required: true,
 },
    picture: {
        type: String,
        required: true,
    }
  
});
module.exports = mongoose.model('article', article);