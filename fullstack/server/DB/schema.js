// models/Message.js

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: String,
  userName: String,
  timestamp: Date,
});

module.exports = mongoose.model('Message', messageSchema);
