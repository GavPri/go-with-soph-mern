const express = require("express");

const router = express.Router();

const { likeBlogPost } = require("../controllers/likeBlogController");

const { authenticateUser } = require("../middleware/authenticateUser");

router.post("/blogs/:_id/likes",  likeBlogPost);

module.exports = router;
