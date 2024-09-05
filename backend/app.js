require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./src/config/db');
const urlRoutes = require('./src/routes/urlRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', urlRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
