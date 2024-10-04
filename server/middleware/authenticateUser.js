// * imports for authenticating a user.
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const JWT_SECRET = process.env.JWT_SECRET;

// * Function to authenticate action

const authenticateUser = async (req, res, next) => {};

module.exports = { authenticateUser };
