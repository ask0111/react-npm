// models/Message.js

const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: String,
  userName: String,
  timestamp: Date,
});

const usersSchema = new mongoose.Schema({
  userId: String,
  socket: String,
  timestamp: Date,
});

const Modal = mongoose.model('Message', messageSchema);
const UserModal = mongoose.model('UserModal', usersSchema);

module.exports = {Modal, UserModal}
