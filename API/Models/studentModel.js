const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let studentSchema = mongoose.Schema({
  _id: Number,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

studentSchema.plugin(AutoIncrement, { id: 'id_seq', inc_field: '_id' });

module.exports = mongoose.model('student', studentSchema);