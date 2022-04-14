const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let speakerSchema = mongoose.Schema({
  id: Number,
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  address: String
});

speakerSchema.plugin(AutoIncrement, { id: 'speaker_id', inc_field: 'id' });

module.exports = mongoose.model('speaker', speakerSchema);