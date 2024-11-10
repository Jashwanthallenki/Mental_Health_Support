const express = require('express');
const router = express.Router();

const Therapist  = require("../models/Therapist");
const Patient = require("../models/Patient");

router.post('/register', async (req, res) => {
    const { email, username, password, therapist_id } = req.body;
    try {
        const patient = new Patient({
            username,
            password,
            therapist_id
        });
        await patient.save();

        const therapist = await Therapist.findOne({ _id: therapist_id });
        if (therapist) {
            therapist.patients.push(patient._id);
            await therapist.save();
        }

        res.status(201).json({ message: "Patient registered successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to register patient" });
    }
});

module.exports = router;
