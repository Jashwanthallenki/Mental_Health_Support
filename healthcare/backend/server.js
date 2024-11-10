// server.js
const express = require('express');


const connectDB = require('./config/db');

const chatBotRoute = require('./routes/chatBotRoute');
const sentimentRoute = require('./routes/sentimentRoute');
const authRoutes = require('./routes/authRoutes');
// const moodRoutes = require('./routes/moodRoutes');

const app = express();
app.use(cors());
connectDB();
app.use(cors());
app.use(express.json());
app.use('/generate',chatBotRoute);
app.use('/analyzeEmotion',sentimentRoute);
app.use('/auth', authRoutes);
// app.use('/api/mood', moodRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
