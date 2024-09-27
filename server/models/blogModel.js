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
      ref: User,
      required: true,
    },
    heroImage: {
      type: String,
      required: true,
    },
    content: {
      type: [
        {
          type: {
            type: String,
            enum: ["text", "image"],
            required: true,
          },
          content: {
            type: String,
            required: function () {
              return this.type === "text";
            },
          },
          imageUrl: {
            type: String,
            required: function () {
              return this.type === "image";
            },
          },
          altText: {
            type: String,
            required: function () {
              return this.type === "image";
            },
          },
        },
      ],
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
      enum: [
        "Africa",
        "Antarctica",
        "Asia",
        "Europe",
        "North America",
        "Australia/Oceania",
        "South America",
      ],
      required: true,
    },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema )

module.exports = Blog;
