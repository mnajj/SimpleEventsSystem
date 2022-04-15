const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let adminSchema = mongoose.Schema({
  _id: Number,
  userName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

adminSchema.plugin(AutoIncrement, { id: 'admin_id_seq', inc_field: '_id' });

module.exports = mongoose.model('admin', adminSchema);