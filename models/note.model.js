const mongoose = require('mongoose');
const uuid = require('uuid')
const Schema = mongoose.Schema;
let Note = new Schema({
    id:{
        type: String, default: uuid.v4()
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
});
module.exports = mongoose.model('Note', Note);