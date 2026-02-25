const errorHandler = (err, req, res, next) => {
    console.error(err); // Log the error for debugging

    const statusCode = err.statusCode || 500; // Default to 500 if no status code is set

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};

module.exports = errorHandler;