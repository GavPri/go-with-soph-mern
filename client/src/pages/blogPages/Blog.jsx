import React, { useEffect } from "react";
import axios from 'axios'

const Blog = () => {
  const getBlogs = async () => {
    const response = await axios.get("/get-blogs");
    console.log(response);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="mt-28 flex flex-col justify-center items-center w-full font-qs text-text text-xl"></div>
  );
};

export default Blog;
