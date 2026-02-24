const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route
router.get("/profile", authMiddleware, (req, res) => {
    res.json({ message: `Welcome to protected route ${req.user.name}!` });
});

module.exports = router;