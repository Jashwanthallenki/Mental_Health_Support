const express = require('express');
const { HfInference } = require('@huggingface/inference');
require('dotenv').config();

const router = express.Router();
const hf = new HfInference(process.env.HF_API_KEY);

async function analyzeEmotion(text) {
    try {
        const result = await hf.textClassification({
            model: 'SamLowe/roberta-base-go_emotions',
            inputs: text,
        });
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error with Hugging Face API:', error);
    }
}

router.post('/', async (req, res) => {
    const { text } = req.body;
    const emotions = await analyzeEmotion(text);
    res.json({ emotions });
  });
  
  module.exports = router;