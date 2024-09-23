const express = require("express");
const router = express.Router();
const cors = require("cors");
const test = require("../controllers/authControllers");

router.use(
  cors({
    credentials: true,
    origin: "https://5173-gavpri-gowithsophmern-74r3xp0o5o7.ws-eu116.gitpod.io",
  })
);

router.get("/", test);
router.post("/register", registerUser);

module.exports = router;
