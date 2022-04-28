const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt');

let adminSchema = mongoose.Schema({
  _id: Number,
  userName: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

adminSchema.pre('save', function (next) {
  var admin = this;
  if (!admin.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(Number(process.env.SALT_WORK_FACTOR), function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(admin.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      admin.password = hash;
      next();
    });
  });
});

adminSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

adminSchema.plugin(AutoIncrement, { id: 'admin_id_seq', inc_field: '_id' });

module.exports = mongoose.model('admin', adminSchema);