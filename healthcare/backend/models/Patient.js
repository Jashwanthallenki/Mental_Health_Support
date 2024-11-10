const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const PatientSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  therapist_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Therapist'
  },
  message: [{
    type: String
  }]
});

// Hash password before saving
PatientSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('Patient', PatientSchema);
