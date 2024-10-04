// * imports for authenticating a user.
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const JWT_SECRET = process.env.JWT_SECRET;

// * Function to authenticate action

const authenticateUser = async (req, res, next) => {
  // * Get cookies from authorisation header
  const token =
    req.cookies.token || req.Header("Authorization")?.replace("Bearer", "");

  // * Check if cookie exists
  if (!token) {
    return res.status(401).json({ message: "Log in to like a post" });
  }
};

module.exports = { authenticateUser };
