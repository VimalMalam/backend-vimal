const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/formdb");
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("Database connection failed ❌");
    process.exit(1);
  }
};

module.exports = connectDB;
