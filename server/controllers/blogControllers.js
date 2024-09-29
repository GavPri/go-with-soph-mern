const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
  const { title, slug, heroImage, tags, destination, continent, content } =
    req.body;

  try {
    const newBlogPost = new Blog({
      title,
      slug,
      heroImage,
      tags,
      destination,
      continent,
      content,
    });

    await newBlogPost.save();
    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "There was an error creating the blog post." });
  }
};

module.exports = { createBlog };
