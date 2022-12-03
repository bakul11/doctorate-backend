const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    logo: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    des: {
        type: String,
        required: true,
        trim: true
    }
})

const serviceDB = mongoose.model('service', serviceSchema);
module.exports = serviceDB;