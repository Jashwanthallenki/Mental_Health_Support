const Therapist  = require("./models/Therapist");
const Patient = require("./models/Patient");

const mongoose = require('mongoose');
const connectDB = require('./config/db');

connectDB();

async function seedDatabase() {
    try {
      // Clear existing data
      await Therapist.deleteMany({});
      await Patient.deleteMany({});
  
      // Create an example therapist
      const therapist = new Therapist({
        username: 'therapist1',
        password: 'therapistPassword', // This will be hashed automatically
      });
  
      await therapist.save();
  
      // Create example patients associated with this therapist
      const patient1 = new Patient({
        username: 'patient1',
        password: 'patient1Password', // This will be hashed automatically
        therapist_id: therapist._id,
        message: ['Hello', 'I need help with anxiety'],
      });
  
      const patient2 = new Patient({
        username: 'patient2',
        password: 'patient2Password', // This will be hashed automatically
        therapist_id: therapist._id,
        message: ['Hello', 'I need help with stress management'],
      });
  
      await patient1.save();
      await patient2.save();
  
      // Update therapist's patients array
      therapist.patients.push(patient1._id, patient2._id);
      await therapist.save();
  
      console.log('Database seeded successfully!');
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      mongoose.connection.close();
    }
  }
  
  seedDatabase();