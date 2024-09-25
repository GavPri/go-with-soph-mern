const User = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // * Name checks.
    // * ----- Check if the length is greater than two and less than 50

    if (name.length < 2) {
      return res.json({ error: "User name must be more than 2 characters." });
    }
    if (name.length > 50) {
      return res.json({ error: "Usernames must be under 50 characters." });
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
      return res.json({
        error:
          "Username can only contain letters, numbers, underscores, and hyphens",
      });
    }
    const nameExists = await User.findOne({ name });
    if (nameExists) {
      return res.json({ error: "This email is taken already." });
    }

    // * Password check
    // * ---- Check if password is enter & it's greater than 5 characters.

    if (!password || password.length < 6) {
      return res.json({ error: "The minimum password length is 6." });
    }

    // * Email Checks
    // * ----- Check the email format
    if (!email || !/.+@.+\..+/.test(email)) {
      return res.json({ error: "Please enter a valid email address." });
    }
    // * ----- Check if the email exists.
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.json({ error: "This email is taken already." });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    console.error(error);
    res.json({ error: "An error occurred during registration." });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // * Check if user exists
    console.log("Checking if user exists...");
    const user = await User.findOne({ email });

    if (!user) {
      console.log("No user with this email found.");
      return res.status(400).json({
        error: "No user with this email found.",
      });
    }

    // * Check if passwords match
    const matchPasswords = await comparePassword(password, user.password);

    if (!matchPasswords) {
      console.log("Incorrect password.");
      return res.status(400).json({ error: "Incorrect password" });
    }

    console.log("Passwords match. Generating token...");

    // * Try to sign the JWT token
    try {
      const token = jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      console.log("Token generated successfully. Sending response...");

      // * Send response with cookie and user data
      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: true, // Send cookie only over HTTPS
          sameSite: "None", // Allows cross-origin requests
        })
        .json({ message: "Log in successful", user });
    } catch (err) {
      console.error("Error generating token:", err);
      return res.status(500).json({ message: "Token generation failed" });
    }
  } catch (error) {
    // * Catch and log any other errors during the login process
    console.error("Error during login:", error);
    return res.status(500).json({ error: "An error occurred during login." });
  }
};

const getProfile = () => {
  
}

module.exports = { test, registerUser, loginUser, getProfile };
