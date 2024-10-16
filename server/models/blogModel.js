const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    gallery: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.length <= 10; 
        }
      }
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
      index:true
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: "User", // Optional: if you want to populate later
      },
    ],
    comments: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User who made the comment
        content: { type: String, required: true }, // The comment text
        createdAt: { type: Date, default: Date.now }, // Timestamp for when the comment was created
      },
    ],
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
