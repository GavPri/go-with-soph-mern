const express = require("express");

const router = express.Router();

const {
  createComment,
  deleteComment,
  editComment
} = require("../controllers/commentControllers");
const { authenticateUser } = require("../middleware/authenticateUser");

router.post("/blogs/:_id/comment", authenticateUser, createComment);
router.delete("/blogs/:_id/delete/:commentId", authenticateUser, deleteComment);
router.put("/blogs/:_id/edit/:commentId", authenticateUser, editComment)

module.exports = router;
