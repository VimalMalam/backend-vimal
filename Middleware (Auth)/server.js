const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connection to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => { console.log("Connected to MongoDB") })
    .catch(err => console.log(err));

// Routes
app.use("/api", require('./routes/authRoutes'));

// Start the server and shows the port number in the console
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));