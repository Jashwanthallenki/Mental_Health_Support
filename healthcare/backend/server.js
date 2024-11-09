// server.js
const express = require('express');
const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const moodRoutes = require('./routes/moodRoutes');

const app = express();
connectDB();

app.use(express.json());
// app.use('/auth', authRoutes);
// app.use('/api/mood', moodRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
