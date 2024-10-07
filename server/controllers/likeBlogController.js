const blog = require("../models/blogModel");
const User = require("../models/userModel");

const likeBlogPost = async (req, res) => {
  try {
    const blogID = req.params._id; // Blog id is stored in the url
    const userID = req.user._id; // User id authenticated.

    const blogPost = await blog.findById(blogID); // Await the request to match blog posts.

    if (!blogID || !userID) {
      return res
        .status(400)
        .json({ error: "Blog ID or User ID cannot be null." });
    }

    if (!blogPost) {
      return res
        .status(404)
        .json({ error: "No blog post found with this ID." }); // Check if the block post exists
    }

    if (!userID) {
      return res.status(404).json({ error: "No user ID found." });
    }

    if (blogPost.likes.includes(userID)) {
      return res.status(400).json({ message: "You have already liked post." }); // Check if user has already liked the post
    }

    blogPost.likes.push(userID); // add users likes to the array & save
    await blogPost.save();

    const user = await User.findById(userID); // await finding blog post.
    if (!user) {
      return res.status(404).json({ error: "No user found with this ID." });
    }

    if (user.likedBlogs.includes(blogID)) {
      return res.status(400).json({error: 'You have already liked this blog post.'})
    }
    
    user.likes.push(blogID);
    await user.save();

    res
      .status(200)
      .json({ message: "Liked blog post.", blogPost: blogPost.likes.length }); // return the numbers of likes
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to like blog post." });
  }
};

module.exports = { likeBlogPost };
