const express = require("express");

const router = express.Router();

const {
  likeBlogPost,
  getLikedPosts,
} = require("../controllers/likeBlogController");

const { authenticateUser } = require("../middleware/authenticateUser");

router.post("/blogs/:_id/likes", authenticateUser, likeBlogPost);
router.get("/liked-blogs", authenticateUser, getLikedPosts);

module.exports = router;
