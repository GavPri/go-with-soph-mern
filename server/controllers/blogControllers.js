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

 const galleryImages = req.files.map((file) => file.path); // Get the URLs from the uploaded files

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
     gallery: galleryImages, // Add the gallery images to the blog post
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
  const limitNumber = parseInt(limit); // converting limit to integer
  try {
    let blogs;
    if (sortBy === "newest") {
      totalBlogs = await Blog.countDocuments();
      blogs = await Blog.find()
        .sort({ publishedAt: -1 }) // gets the newest blog posts.
        .skip((pageNumber - 1) * limitNumber) // eg page 2 - 1 = 1 * 3 = 3, skip 1,2,3 , show 4,5 6
        .limit(limitNumber); // limits the amount of ducuments shown to 3
    } else if (sortBy === "mostLiked") {
      blogs = await Blog.aggregate([
        {
          $project: {
            _id: 1,
            title: 1,
            tags: 1,
            destination: 1,
            heroImage: 1,
            likesCount: { $size: "$likes" }, // Create a new field for the count of likes
          },
        },
        { $sort: { likesCount: -1 } }, // Sort by the likes count
        { $skip: (pageNumber - 1) * limitNumber },
        { $limit: limitNumber },
      ]);

      totalBlogs = await Blog.countDocuments();
    } else {
      return res
        .status(400)
        .json({ error: 'Invalid sort option. Use "newest" or "mostLiked".' });
    }
    const totalPages = Math.ceil(totalBlogs / limitNumber);

    res.status(200).json({ blogs, totalPages });
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

// * get blogs by contient
const getBlogsByContinent = async (req, res) => {
  const { continent } = req.params;
  const { page = 1 } = req.query;

  console.log("Blog parameter found: ", continent);
  try {
    const blogs = await Blog.find({ continent: continent })
      .sort({ publishedAt: -1 })
      .limit(3)
      .skip((page - 1) * 3);

    if (!blogs.length) {
      return res.status(404).json({ error: "No blog found." });
    }

    res.status(200).json(blogs);
  } catch (error) {
    console.log("Error fetching blogs by continent.");
    res.status(500).json({ message: "Server error" });
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
  getBlogsByContinent,
  imageUpload,
};
