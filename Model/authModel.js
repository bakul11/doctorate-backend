const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        default: "",
        trim: true
    },
    address: {
        type: String,
        default: "",
        trim: true
    },
    profile: {
        type: String,
        default: "https://i.ibb.co/6s23wNN/avater.png"
    }
})

const authDB = mongoose.model('authUser', userSchema);
module.exports = authDB;