const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UsersInfoSchema = new Schema({
    name: {type: String},
    university: {type: String},
    degree: {type: String},
    avatar: {type: String},
});


// Export Model
module.exports = UsersInfoSchema;