const Therapist = require("./models/Therapist");
const Patient = require("./models/Patient");

const mongoose = require('mongoose');
const connectDB = require('./config/db');

connectDB();

async function seedDatabase() {
  try {
    // Find all therapists that don't have the "rating" field
    const therapistsWithoutRating = await Therapist.find({ rating: { $exists: false } });

    // Update each therapist by adding the default rating of 3
    if (therapistsWithoutRating.length > 0) {
      const updatePromises = therapistsWithoutRating.map(async (therapist) => {
        therapist.rating = 3; // Set default rating
        await therapist.save(); // Save the updated document
      });

      // Wait for all updates to finish
      await Promise.all(updatePromises);
      console.log(`${therapistsWithoutRating.length} therapists updated with default rating.`);
    } else {
      console.log('No therapists need updating.');
    }
    
  } catch (err) {
    console.error('Error updating therapists:', err);
  }
}

seedDatabase();
