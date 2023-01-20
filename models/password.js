const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
website: String,
password: String,
username: String,
});

module.exports = mongoose.model('Password', passwordSchema);