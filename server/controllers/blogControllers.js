const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
  const {
    title,
    slug,
    heroImage,
    tags,
    destination,
    continent,
    content,
    author,
  } = req.body;

  try {
    const newBlogPost = new Blog({
      title,
      slug,
      heroImage,
      tags,
      destination,
      continent,
      content,
      author,
    });

    await newBlogPost.save();
    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    res;
    console.error(error);
    res.status(400).json({
      error: "There was an error creating the blog post.",
      details: error.message,
    });
  }
};

// * get all blog posts.
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while fetching blog posts",
      details: error.message,
    });
  }
};

// * get a blog post by id.

const getBlogsID = async (req, res) => {
  try {
    const blogPost = await Blog.findById(req.params._id);
    if (!blogPost) {
      res.status(404).json({ error: "No matching blog post found." });
    }
    res.json(blogPost);
  } catch (error) {
    res.status(400).json({ error: "No blog found." });
  }
};

// * Edit blogs by ID

const editBlogsID = async (req, res) => {
  const { _id } = req.params;
  const {
    title,
    heroImage,
    slug,
    tags,
    destination,
    continent,
    content,
    author,
  } = req.body;
  try {
  } catch (error) {}
};

module.exports = { createBlog, getBlogs, getBlogsID, editBlogsID };
