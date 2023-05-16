const mongoose = require('mongoose');

const userdetails = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true }
})

const usermodel = mongoose.model('userdata', userdetails);
module.exports = usermodel;