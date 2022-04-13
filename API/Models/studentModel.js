const mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
  _id: Number,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

module.exports = mongoose.model('student', studentSchema);