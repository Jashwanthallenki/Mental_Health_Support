const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const Therapist = require("../models/Therapist");
const Patient = require("../models/Patient");

const JWT_SECRET = 'jwt_secret_key';

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
        const token = jwt.sign(
            { id: patient._id, username: patient.username },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({
            message: "Patient registered successfully",
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to register patient" });
    }
});

module.exports = router;
