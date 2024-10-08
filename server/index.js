const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database is connected"))
  .catch((err) => console.log("database not connected", err));

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://gowithsoph-gamma.vercel.app",
      "https://5173-gavpri-gowithsophmern-homzq1knwgh.ws-eu116.gitpod.io",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", require("./routes/authRoutes"));
app.use("/api/", require("./routes/blogRoutes"));
app.use("/api/", require("./routes/searchRoutes"));
app.use("/api/", require("./routes/likeRoutes"));

PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
