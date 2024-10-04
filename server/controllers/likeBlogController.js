const blog = require("../models/blogModel");

const likeBlogPost = async (req, res) => {
  const blogID = req.params._id; // Blog id is stored in the url
  const userID = req.user._d; // User id authenticated.

  const blogPost = await blog.findById(blogID); // Await the request to match blog posts.

  if (!blogPost) {
    return res.status(401).json({ error: "No blog post found." }); // Check if the block post exists
  }
};

module.exports = { likeBlogPost };
