const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const patient = await Patient.findOne({ username });
        if (!patient) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        const isMatch = await bcrypt.compare(password, patient.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        const token = jwt.sign(
            { id: patient._id, username: patient.username },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Signin successful",
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to sign in" });
    }
});

module.exports = router;
