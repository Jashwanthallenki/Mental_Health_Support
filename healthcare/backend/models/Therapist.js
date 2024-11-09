const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Assuming bcrypt is also needed for therapist

const TherapistSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  patients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  }],
});

// Hash password before saving
TherapistSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('Therapist', TherapistSchema);
