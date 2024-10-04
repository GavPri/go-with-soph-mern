const blog = require("../models/blogModel");

const likeBlogPost = async (req, res) => {
  try {
    const blogID = req.params._id; // Blog id is stored in the url
    const userID = req.user._d; // User id authenticated.

    const blogPost = await blog.findById(blogID); // Await the request to match blog posts.

    if (!blogPost) {
      return res.status(401).json({ error: "No blog post found." }); // Check if the block post exists
    }

    if (blogPost.likeCount.includes(userID)) {
      return res.status(400).json({ message: "You have already liked post." }); // Check if user has already liked the post
    }

    blogPost.likeCount.push(userID); // add users likes to the array & save
    await blogPost.save();

    res.status(200).json({ message: "Liked blog post." });
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'Failed to like blog post.'})
  }
};

module.exports = { likeBlogPost };
