const User = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/auth");

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
    const nameExists = await User.findOne({ email });
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

const loginUser = async (req,res) => {

}

module.exports = { test, registerUser, loginUser };
