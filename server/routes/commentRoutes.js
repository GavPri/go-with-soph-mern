const express = require("express");

const router = express.Router();

const {
  createComment,
  deleteComment,
} = require("../controllers/commentControllers");
const { authenticateUser } = require("../middleware/authenticateUser");

router.post("/blogs/:_id/comment", authenticateUser, createComment);
router.delete(
  "/blogs/:blogId/delete/:commentId",
  authenticateUser,
  deleteComment
);

module.exports = router;
