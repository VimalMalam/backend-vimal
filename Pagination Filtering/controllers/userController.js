const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        // Get query values
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;
        const name = req.query.name;
        const email = req.query.email;

        // Create filter object
        const filter = {};

        // If name is provided, Search by name
        if (name) {
            filter.name = { $regex: name, $options: 'i' }; // For Case-insensitive search
        }

        // If email is provided, Search by email
        if (email) {
            filter.email = { $regex: email, $options: 'i' }; // For Case-insensitive search
        }

        // Pagination, Calculate how many documents to skip, Calculate the "Offset"
        const skip = (page - 1) * limit;

        // Fetch Users from the database based on filter and pagination
        const users = await User.find(filter).skip(skip).limit(limit);

        // Count total users
        const total = await User.countDocuments(filter);

        // Send response
        res.json({
            page,
            totalPages: Math.ceil(total / limit),
            totalUsers: total,
            users
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};