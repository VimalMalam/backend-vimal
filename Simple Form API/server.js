const express = require("express");
const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api", formRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Form API Running 🚀");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
