const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL// localhost ke jagah 127.0.0.1 best practice hai

const mongoURL = process.env.MONGODB_URL;
// Connect to MongoDB


mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Get the default connection
const db = mongoose.connection;

// Handle disconnection
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;