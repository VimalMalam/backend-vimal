const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res, next) => {
    try {
        const { name, email } = req.body;

        // Check if the user already exists
        if (!name || !email) {
            const error = new Error("Name and Email are required");
            error.status = 400;
            return next(error);
        }

        const user = new User({ name, email });

        // Save the user to the database
        await user.save();

        res.status(201).json({ message: "User Created Successfully", user });

    } catch (err) {
        next(err); // send error to global handler
    }
};

// Get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};