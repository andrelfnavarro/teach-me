const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const uri = process.env.teach_mongo_connection_uri;
mongoose.connect('mongodb+srv://GuilhermeZ:LabSoftRisco@teachme.zjmut.mongodb.net/teach-me', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,
});
mongoose.set('debug', true)

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("Connection Successful!");
});

const app = express();

// CORS
app.use(cors());

// Middlewares
app.use(morgan('dev'));

// Routes
app.use('/api/absenses', require('./routes/absenses'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/health', require('./routes/health'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));

module.exports = app
