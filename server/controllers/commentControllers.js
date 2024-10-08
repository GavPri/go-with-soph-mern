const Blog = require("../models/blogModel");
const User = require("../models/userModel");

const createComment = async (req, res) => {
  const blogID = req.params._id; // get the blog id from the url
  const userID = req.user._id; // get the user id from auth.
  const content = req.body; // get the comment content

  const blog = await Blog.findById(blogID); // await the blog post being found.

  try {
    if (!userID) {
      return res.status(404).json({ error: "No userId found." });
    }
    if (!blog) {
      return res.status(404).json({ error: "No blog" });
    }
    if (content.length < 1 || content.length > 1000) {
      return res
        .status(400)
        .json({ error: "Comment must be between 1 and 1000 characters." });
    }
  } catch (error) {}
};

module.exports = { createComment };
