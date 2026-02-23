const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    // Get token from header
    const token = req.header('Authorization');

    // Check if no token
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user id to request
        req.user = decoded.id;

        next(); // Go to next function

    } catch (err) {
        res.status(401).json({ message: "Token is not valid" });
    }
}