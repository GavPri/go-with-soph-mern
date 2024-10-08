const Blog = require("../models/blogModel");
const User = require("../models/userModel");

const createComment = async (req, res) => {
  const blogID = req.params._id; // get the blog id from the url
  const userID = req.user._id; // get the user id from auth.
  const content = req.body; // get the comment content

  const blog = await Blog.findById(blogID); // await the blog post being found.

  try {
  } catch (error) {}
};

module.exports = { createComment };
