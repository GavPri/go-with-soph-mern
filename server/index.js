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
    origin: "https://gowithsoph-gamma.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/blogRoutes"));
app.use("/", require("./routes/searchRoutes"));
app.use("/", require("./routes/likeRoutes"));

PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
