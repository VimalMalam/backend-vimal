const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected Perfectly');
    } catch (err) {
        console.error(err);
        process.exit(1); // Stop the server if there is a connection error
    }
};

module.exports = connectDB;