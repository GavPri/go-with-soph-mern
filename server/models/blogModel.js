const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./userModel");

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    heroImage: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: [String], 
      required: true,
      default: [], 
    },
    destination: {
      type: String, 
      required: true,
    },
    continent: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: "User", // Optional: if you want to populate later
      },
    ],
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
