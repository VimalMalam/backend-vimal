const express = require('express');
const multer = require('multer');
const { createUser } = require('../controllers/userController');

const router = express.Router();

// Storage configuration for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Set the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Set the filename to be unique
    },
});

const upload = multer({ storage });

// API route to create a new user with profile picture upload
router.post("/users", upload.single("profilePic"), createUser);

module.exports = router;