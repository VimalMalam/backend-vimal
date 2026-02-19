const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/userDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api", userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
