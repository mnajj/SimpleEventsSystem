const mongoose = require('mongoose');

let speakerSchema = mongoose.Schema({
  _id: Number,
  email: {type: String, required: true, unique: true},
  userName: {type: String, required: true},
  password: {type: String, required: true},
  address: String
});

module.exports = mongoose.model('speaker', speakerSchema);