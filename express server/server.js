const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// Create User Schema
const userSchema = new mongoose.Schema({
  name: String
});

// Create Model
const User = mongoose.model("User", userSchema);

// GET - Get all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// POST - Add new user
app.post("/users", async (req, res) => {
  const newUser = new User({
    name: req.body.name
  });

  await newUser.save();
  res.status(201).json(newUser);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
