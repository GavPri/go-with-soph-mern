const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
  const { title, slug, heroImage, tags, destination, continent, content } =
    req.body;

};
