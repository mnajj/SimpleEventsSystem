const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt');

let speakerSchema = mongoose.Schema({
  _id: Number,
  email: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  address: String
});

speakerSchema.pre('save', function (next) {
  var speaker = this;
  if (!speaker.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(Number(process.env.SALT_WORK_FACTOR), function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(speaker.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      speaker.password = hash;
      next();
    });
  });
});

speakerSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

speakerSchema.plugin(AutoIncrement, { id: 'speaker_id', inc_field: '_id' });

module.exports = mongoose.model('speaker', speakerSchema);