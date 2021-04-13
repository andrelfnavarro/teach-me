const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsersInfoSchema = require('./UsersInfo');

// Create Schema
const CoursesSchema = new Schema({
    title: {type: String},
    quote: {type: String},
    price: {type: Number},
    grade: {type: Number},
    userInfo: {
        name: {type: String},
        university: {type: String},
        degree: {type: String},
        avatar: {type: String},
    },
});


// Export Model
module.exports = CoursesSchema;