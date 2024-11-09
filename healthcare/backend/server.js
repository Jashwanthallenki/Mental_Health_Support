// server.js
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const chatBotRoute = require('./routes/chatBotRoute');
<<<<<<< HEAD
const cors = require('cors')
=======
const sentimentRoute = require('./routes/sentimentRoute');
>>>>>>> 53202d1c6b4899d865711fdb566de9033ae4fcdf
// const authRoutes = require('./routes/authRoutes');
// const moodRoutes = require('./routes/moodRoutes');

const app = express();
app.use(cors());
connectDB();
app.use(cors());
app.use(express.json());
app.use('/generate',chatBotRoute);
app.use('/analyzeEmotion',sentimentRoute);
// app.use('/auth', authRoutes);
// app.use('/api/mood', moodRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
