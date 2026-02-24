const User = require('../models/User');

// Create a new user with profile picture
exports.createUser = async (req, res) => {
    try {
        // Extract user data from request body
        const { name, email } = req.body;

        const newUser = new User({
            name,
            email,
            profilePic: req.file ? req.file.path : null // Store the file path of the uploaded profile picture
        });

        // Save the new user to the database
        await newUser.save();

        // Send a success response with the created user data
        res.status(201).json({ message: "User Created Successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error Creating User", error: error.message });
    }
};