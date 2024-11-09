const express = require('express');
const { HfInference } = require('@huggingface/inference');
require('dotenv').config(); // For loading environment variables

const router = express.Router();
const hf = new HfInference(process.env.HF_API_KEY);

router.post('/generate', async (req, res) => {
    console.log(hf);
    const { prompt } = req.body;
    try {
        const result = await hf.textGeneration({
            model: 'meta-llama/Llama-3.2-3B-Instruct',
            inputs: prompt,
            parameters: { 
                max_new_tokens: 1000,
                temperature: Math.random(),
                top_k: 1000,
                top_p: 0.9
            },
            options: { timeout: 180000 } 
        });

        console.log(result.generated_text);
        res.json({ blogPost: result.generated_text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating text' });
    }
});

module.exports = router;