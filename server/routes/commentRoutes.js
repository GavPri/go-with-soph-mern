const express = require("express");

const router = express.Router();

const { createComment } = require("../controllers/commentControllers");

router.post(":_id/comment", createComment);

module.exports = router;
