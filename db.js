const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'; // localhost ke jagah 127.0.0.1 best practice hai

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