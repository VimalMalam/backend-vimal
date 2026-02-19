const User = require("../models/userModel");

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email
    });

    res.status(201).json({
      success: true,
      data: user
    });

  } catch (error) {

    // Duplicate Email Error Handling
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }

    // Validation Error Handling
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};
