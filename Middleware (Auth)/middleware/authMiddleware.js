const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function (req, res, next) {

    // Get token from header
    const token = req.header('Authorization');

    // Check if no token
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 🔥 Fetch full user from database
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Attach user to request object
        req.user = user;

        next(); // Go to next function

    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
}