const express = require("express");
require("dotenv").config();
const { mongoose, trusted } = require("mongoose");
const cookieParser = require("cookie-parser");
const cloudinary = require("./cloudinary-config").v2; // create cloudinary instance.
const compression = require("compression");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database is connected"))
  .catch((err) => console.log("database not connected", err));

const app = express();
app.use(compression());
app.use(compression());
app.use(express.json({ limit: "100mb" })); // Increase JSON payload size
app.use(express.urlencoded({ limit: "100mb", extended: true })); // Increase URL-encoded payload size
const cors = require("cors"); // cors configuration
const DEV_URL = process.env.DEV_URL;
const PROD_URL = process.env.PROD_URL;
var whitelist = [PROD_URL, DEV_URL];
var corsOptions = { origin: whitelist, credentials: true };
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/api/", require("./routes/authRoutes"));
app.use("/api/", require("./routes/blogRoutes"));
app.use("/api/", require("./routes/searchRoutes"));
app.use("/api/", require("./routes/likeRoutes"));
app.use("/api/", require("./routes/commentRoutes"));

PORT = 8000;

app.listen(PORT, () =>
  console.log(
    `Server is running on port ${PORT}`
  )
);
