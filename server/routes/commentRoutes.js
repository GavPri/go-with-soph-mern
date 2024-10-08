const express = require("express");

const router = express.Router();

const { createComment } = require("../controllers/commentControllers");
const { authenticateUser } = require("../middleware/authenticateUser");

router.post("/blogs/:_id/comment", authenticateUser, createComment);

module.exports = router;
