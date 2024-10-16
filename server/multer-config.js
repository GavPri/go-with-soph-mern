// Configuration for multer

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary-config");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog_gallery",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

module.exports = upload;
