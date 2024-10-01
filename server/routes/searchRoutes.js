const express = require("express");

const router = express.Router()

const { searchBlogs } = require('../controllers/searchController');


router.get('/search-blogs', searchBlogs)

module.exports = router
