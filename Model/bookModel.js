const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    service: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    bookingTime: {
        type: String,
        required: true,
        trim: true
    },
    bookingDate: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String,
        default: ""
    }
})

const bookDB = mongoose.model('bookOrder', bookSchema);
module.exports = bookDB;