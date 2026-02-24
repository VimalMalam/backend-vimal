const express = require('express');
const dontenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables and connect to the database
dontenv.config();
connectDB();

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Static folder to access uploaded images
app.use('/uploads', express.static('uploads'));

app.use('/api', require('./routes/userRoutes')); // Use user routes

app.listen(5000, () => console.log('Server running on port 5000'));