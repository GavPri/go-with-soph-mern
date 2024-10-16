// Configuration for multer

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary-config");

const storage = new CloudinaryStorage({
    
})

module.exports = upload;
