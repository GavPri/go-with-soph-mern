const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database is connected"))
  .catch((err) => console.log("database not connected", err));

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin:
      "https://5173-gavpri-gowithsophmern-74r3xp0o5o7.ws-eu116.gitpod.io/",
    methods: "GET,POST,PUT,DELETE,OPTIONS", // Allow these HTTP methods
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use("/", require("./routes/authRoutes"));

PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
