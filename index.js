require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(config.dbUrl)
.then(() => {
    console.log('connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

app.use(express.json());

// TODO: ass user and contact routes

// TODO: Remove this endpoint once we have routes
app.get('/', (req, res) => {
    res.json("Hello from the backend API...");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
