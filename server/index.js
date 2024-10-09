const express = require("express");
require("dotenv").config();
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

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

app.use("/api/", require("./routes/authRoutes"));
app.use("/api/", require("./routes/blogRoutes"));
app.use("/api/", require("./routes/searchRoutes"));
app.use("/api/", require("./routes/likeRoutes"));
app.use("/api/", require("./routes/commentRoutes"));

PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
