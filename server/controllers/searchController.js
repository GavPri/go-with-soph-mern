const Blog = require("../models/blogModel");

const searchBlogs = async (req, res) => {
  try {
    const query = req.query.q;

    const searchResults = await Blog.find({
      $or: [
        { title: { $regex: query, options: "i" } },
        { content: { $regex: query, options: "i" } },
        { tags: { $regex: query, options: "i" } },
        { destination: { $regex: query, options: "i" } },
        { continent: { $regex: query, options: "i" } },
      ],
    });

    res.json(searchResults);
  } catch (error) {
    res.status(404).json({error: 'No blog post found'})
  }
};

module.exports = { searchBlogs };
