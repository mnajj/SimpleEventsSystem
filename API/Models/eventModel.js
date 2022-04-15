const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// mongoose.set("strictPopulate", false);
let eventSchema = mongoose.Schema({
  _id: Number,
  title: {type: String, required: true},
  date: Date,
  mainSpeaker: {type: Number, ref: 'speaker'},
  otherSpeakers: [{ type: Number, ref: 'speaker'}],
  students: [{ type: Number, ref: 'student'}]
});

eventSchema.plugin(AutoIncrement, { id: 'event_id', inc_field: '_id' });

module.exports = mongoose.model('event', eventSchema);