const express = require("express");

const router = express.Router();

const { likeblogPost } = require("../controllers/likeBlogController");

const { authenticate } = require("../middleware/authenticateUser");

router.post('/:id/likes', authenticate, likeblogPost)

module.exports = {router}
