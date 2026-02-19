const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],   // Required validation
      trim: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],  // Required validation
      unique: true,                           // Makes email unique
      lowercase: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
