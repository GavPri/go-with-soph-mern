const express = require("express");
require("dotenv").config();
const { mongoose, trusted } = require("mongoose");
const cookieParser = require("cookie-parser");
const cloudinary = require("cloudinary").v2; // create cloudinary instance.

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database is connected"))
  .catch((err) => console.log("database not connected", err));

const app = express();
app.use(express.json());
const cors = require("cors"); // cors configuration
const DEV_URL = process.env.DEV_URL;
const PROD_URL = process.env.PROD_URL;
var whitelist = [PROD_URL, DEV_URL];
var corsOptions = { origin: whitelist, credentials: true };
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//Return "https" urls, setting secure: true
const CLOUD_NAME = process.env.CLOUD_NAME;
const CLOUD_API_KEY = process.env.CLOUD_API_KEY;
const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;

cloudinary.config({
  secure: true,
  cloud_name: CLOUD_NAME,
  cloud_api_key: CLOUD_API_KEY,
  cloud_api_secret: CLOUD_API_SECRET,
});

app.use("/api/", require("./routes/authRoutes"));
app.use("/api/", require("./routes/blogRoutes"));
app.use("/api/", require("./routes/searchRoutes"));
app.use("/api/", require("./routes/likeRoutes"));
app.use("/api/", require("./routes/commentRoutes"));

PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
