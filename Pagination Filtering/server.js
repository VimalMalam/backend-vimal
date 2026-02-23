const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Middleware
app.use(express.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected Properly'))
    .catch(err => console.log(err));

//Routes
app.use("/api", require("./routes/userRoutes"));

//Start the server
app.listen(process.env.PORT, () => 
    console.log(`Server running on port ${process.env.PORT}`)
);