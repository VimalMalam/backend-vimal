const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ========== REGISTER ==========
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    if (await User.findOne({ email })) {
      return res.json({ message: "User already exists" });
    }

    // Hash password (no need to create salt separately)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.json({ message: "User registered successfully" });

  } catch (err) {
    res.json({ message: "Something went wrong" });
  }
};


// ========== LOGIN ==========
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // If user not found OR password incorrect
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.json({ message: "Invalid email or password" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });

  } catch (err) {
    res.json({ message: "Something went wrong" });
  }
};