const express = require('express');

const Therapist = require("../models/Therapist");
const router = express.Router();

router.post('/t',async(req,res)=>{
    try {
        const therapists = await Therapist.find();
        res.status(200).json(therapists);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch therapists" });
    }
})

module.exports = router;