const mongoose = require("mongoose");
const { Schema } = mongoose;

const Blog = require("./blogModel"); // import model
const User = require("./userModel");

const commentSchema = new Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true, minlength: 1, maxlength: 1000 },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
