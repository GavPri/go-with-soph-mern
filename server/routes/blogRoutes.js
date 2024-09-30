// * import express

const express = require("express");

// * create router

const router = express.Router();

// * import functions from blog controller

const { createBlog } = require("../controllers/blogControllers");

// * router for get and post requests

router.post("/create", createBlog);
router.get("/get-blogs", getBlogs)

module.exports = router;
