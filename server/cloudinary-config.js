const cloudinary = require("cloudinary").v2;

const CLOUD_NAME = process.env.CLOUD_NAME;
const CLOUD_API_KEY = process.env.CLOUD_API_KEY;
const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;

cloudinary.config({
  secure: true,
  cloud_name: CLOUD_NAME,
  cloud_api_key: CLOUD_API_KEY,
  cloud_api_secret: CLOUD_API_SECRET,
});

module.exports = cloudinary;
