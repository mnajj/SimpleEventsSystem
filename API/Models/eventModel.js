const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let eventSchema = mongoose.Schema({
  id: Number,
  title: {type: String, required: true},
  date: Date,
  mainSpeaker: {type: Number, ref: 'speaker'},
  otherSpeakers: [{ type: Number, ref: 'speaker'}],
  students: [{ type: Number, ref: 'student'}]
});

eventSchema.plugin(AutoIncrement, { id: 'event_id', inc_field: 'id' });

module.exports = mongoose.model('event', eventSchema);