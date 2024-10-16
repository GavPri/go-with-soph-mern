// * import express

const express = require("express");

// * create router

const router = express.Router();

const upload = require('../multer-config')

// * import functions from blog controller

const {
  createBlog,
  getBlogs,
  getBlogsID,
  editBlogsID,
  deleteBlogsID,
  getBlogsByContinent,
  imageUpload,
} = require("../controllers/blogControllers");

// * router for get and post requests

router.post("/create", createBlog);
router.get("/get-blogs", getBlogs);
router.get("/get-blogs/:_id", getBlogsID);
router.put("/edit-blogs/:_id", editBlogsID);
router.delete("/delete-blogs/:_id", deleteBlogsID);
router.get("/blogs/continent/:continent", getBlogsByContinent);
router.post("/upload-image",upload.single("image"), imageUpload);

module.exports = router;
