const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Already use this email'],
        trim: true
    },
    customerMegs: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const contactDB = mongoose.model('contact', contactSchema);
module.exports = contactDB;

