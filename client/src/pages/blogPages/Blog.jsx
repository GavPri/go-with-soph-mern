import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import DOMpurify from "dompurify";
import { MdLocationPin } from "react-icons/md";
import SearchBar from "../../components/SearchBar";
import BlogRow from "../../components/BlogRow";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        "/get-blogs?page=1&limit=3&sortBy=newest"
      );
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="mt-28 flex flex-col justify-center items-center w-full font-qs text-text text-xl">
      <SearchBar />
      <BlogRow blogs={blogs} />
    </div>
  );
};

export default Blog;
