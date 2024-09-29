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
      // type: mongoose.Schema.Types.ObjectId,
      // ref: User,
      type: String,
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
      type: [String], // Array of strings for tags
      required: true,
      default: [], // Empty array by default
    },
    destinations: {
      type: [String], // Array of strings for destinations
      required: true,
      default: [], // Empty array by default
    },
    continent: {
      type: String,
      required: true,
    },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
