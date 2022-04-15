const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let speakerSchema = mongoose.Schema({
  _id: Number,
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  address: String
});

speakerSchema.plugin(AutoIncrement, { id: 'speaker_id', inc_field: '_id' });

module.exports = mongoose.model('speaker', speakerSchema);