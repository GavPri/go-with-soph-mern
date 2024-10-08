const express = require("express");

const router = express.Router();

const {
  createComment,
  deleteComment,
} = require("../controllers/commentControllers");
const { authenticateUser } = require("../middleware/authenticateUser");

router.post("/blogs/:_id/comment", authenticateUser, createComment);
router.delete("/blogs/:_id/delete/:_id", authenticateUser, deleteComment);

module.exports = router;
