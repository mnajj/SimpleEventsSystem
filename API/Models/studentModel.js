const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt');

let studentSchema = mongoose.Schema({
  _id: Number,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

studentSchema.pre('save', function (next) {
  var student = this;
  if (!student.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(Number(process.env.SALT_WORK_FACTOR), function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(student.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      student.password = hash;
      next();
    });
  });
});

studentSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

studentSchema.plugin(AutoIncrement, { id: 'id_seq', inc_field: '_id' });

module.exports = mongoose.model('student', studentSchema);