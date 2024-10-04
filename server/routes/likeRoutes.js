const express = require("express");

const router = express.Router();

const { likeBlogPost } = require("../controllers/likeBlogController");

const { authenticateUser } = require("../middleware/authenticateUser");

router.post("/:_id/likes", authenticateUser, likeBlogPost);

module.exports = router;
