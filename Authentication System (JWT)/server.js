const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    app.use("/api", require("./routes/authRoutes"));

    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );

  } catch (error) {
    console.log("Error connecting to database");
  }
}

startServer();