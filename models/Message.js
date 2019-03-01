const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const MessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    select: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Message = mongoose.model('message', MessageSchema);