const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

mongoose.connect(process.env.MONGO_URL).then(() => console.log('database is connected')).catch((err) => console.log('database not connected', err));

const app = express();

app.use("/", require("./routes/authRoutes"));

PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
