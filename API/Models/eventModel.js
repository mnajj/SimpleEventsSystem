const mongoose = require('mongoose');

let eventSchema = mongoose.Schema({
  _id: Number,
  title: {type: String, required: true},
  date: Date,
  mainSpeaker: {type: Number, ref: 'speaker'},
  otherSpeakers: [{ type: Number, ref: 'speaker'}],
  students: [{ type: Number, ref: 'student'}]
});

module.exports = mongoose.model('event', eventSchema);