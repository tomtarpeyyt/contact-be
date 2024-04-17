require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 5000;

// TODO: connect to mongoDB using mongoose

app.use(express.json());

// TODO: ass user and contact routes

// TODO: Remove this endpoint once we have routes
app.get('/', (req, res) => {
    res.json("Hello from the backend API...");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
