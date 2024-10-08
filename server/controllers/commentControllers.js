const Blog = require("../models/blogModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");

const createComment = async (req, res) => {
  const blogID = req.params._id; // get the blog id from the url
  const userID = req.user._id; // get the user id from auth.
  const content = req.body.content; // get the comment content

  const blog = await Blog.findById(blogID); // await the blog post being found.

  try {
    if (!blog) {
      return res.status(404).json({ error: "No blog found." });
    }
    if (content.length < 1 || content.length > 1000) {
      return res
        .status(400)
        .json({ error: "Comment must be between 1 and 1000 characters." });
    }

    const comment = new Comment({
      userID,
      blog,
      content,
    }); // create new comment with the fields required for the schema

    await comment.save(); // await the comment to be saved.

    await Blog.findByIdAndUpdate(blogID, {
      $push: { comments: comment._id }, // update the blog to populate comments.
    });

    await comment.populate("user", "username").execPopulate();

    res.status(201).json({ message: "Comment created successfully." })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Catch block error." });
  }
};

module.exports = { createComment };
