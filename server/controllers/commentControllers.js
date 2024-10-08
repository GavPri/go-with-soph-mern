const Blog = require("../models/blogModel");
const User = require("../models/userModel"); // Ensure User model is imported if needed

const createComment = async (req, res) => {
  try {
    const blogID = req.params._id;
    const userID = req.user._id;
    const content = req.body.content;

    if (!userID) {
      return res.status(500).json({ error: "No user id found." });
    }

    const blog = await Blog.findById(blogID);
    if (!blog) {
      return res.status(404).json({ error: "No blog found." });
    }

    if (!content || content.length < 1 || content.length > 1000) {
      return res
        .status(400)
        .json({ error: "Comment must be between 1 and 1000 characters." });
    }

    const comment = {
      user: userID,
      content,
      createdAt: new Date(),
    };

    blog.comments.push(comment);

    await blog.save();

    res.status(201).json({
      message: "Comment created successfully.",
      comment: {
        user: {
          _id: userID,
          username: req.user.username,
        },
        content: comment.content,
      },
      blog: blog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

const deleteComment = async (req, res) => {
  try {
    const commentID = req.params._id;

    const comment = await Comment.findOne({
      id: commentID,
      user: req.user._id,
    });

    if (!comment) {
      return res.status(404).json({ error: "No comment found." });
    }

    await Comment.deleteOne({ _id: commentId });
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Catch block error" });
  }
};
module.exports = { createComment, deleteComment };
