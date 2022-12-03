const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogPhoto: {
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
    userName: {
        type: String,
        default: ''
    },
    userPhoto: {
        type: String,
        default: ''
    },
    postTime: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

const blogDB = mongoose.model('blog', blogSchema);
module.exports = blogDB;