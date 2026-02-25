const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Global Error Middleware (ALWAYS LAST)
app.use(errorHandler);

mongoose.connect("mongodb://127.0.0.1:27017/errorDB")
    .then(() => console.log("Connected to MongoDB Perfectlyy"))
    .catch(err => console.log(err));

app.listen(5000, () => console.log("Server is running on port 5000"));