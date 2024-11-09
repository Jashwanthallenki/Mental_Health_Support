const express = require('express');
const { HfInference } = require('@huggingface/inference');
require('dotenv').config();

const router = express.Router();
const hf = new HfInference(process.env.HF_API_KEY);

router.post('/', async (req, res) => {
    const { message: prompt } = req.body;
    console.log(prompt);
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

        const generatedText = result.generated_text || '';
        
        const summaryResult = await hf.request({
            model: 'facebook/bart-large-cnn',
            inputs: generatedText,  
        });

        const summary = summaryResult[0]?.summary_text || 'No summary available';

        res.json({ summary });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error generating text or summarizing' });
    }
});

module.exports = router;
