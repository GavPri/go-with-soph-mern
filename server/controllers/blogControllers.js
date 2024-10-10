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
      comments: [],
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
  const { page = 1, limit = 3, sortBy = "newest" } = req.query; // destructure req.query

  const pageNumber = parseInt(page); // converting page to integer
  const limitNumbber = parseInt(limit); // converting limit to integer
  try {
    let blogs;

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
    const blogPost = await Blog.findById(req.params._id).populate(
      "comments.user",
      "name"
    );
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
    const updatedBlogPost = await Blog.findByIdAndUpdate(
      _id,
      {
        title,
        heroImage,
        slug,
        tags,
        destination,
        continent,
        content,
        author,
      },
      { new: true, runValidators: true }
    );

    if (!updatedBlogPost) {
      return res.status(404).json({ error: "No blog post was found" });
    }

    res.status(200).json({
      message: "Blog post successfully updated",
      blogPost: updatedBlogPost,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "There was an error updating the blog post.",
      details: error.message,
    });
  }
};

const deleteBlogsID = async (req, res) => {
  const { _id } = req.params;

  if (!_id) {
    return res.status(404).json({ error: "No ID found" });
  }

  try {
    const blogToDelete = await Blog.findByIdAndDelete(_id);
    if (!blogToDelete) {
      return res.status(404).json({ error: "No blog was found." });
    }

    res
      .status(200)
      .json({ message: "Blog post was deleted", blogPost: blogToDelete });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: "There was an error updating the blog post.",
      details: error.message,
    });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogsID,
  editBlogsID,
  deleteBlogsID,
};
