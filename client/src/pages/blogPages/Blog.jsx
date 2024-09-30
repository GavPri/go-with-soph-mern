import React, { useEffect, useState } from "react";
import axios from "axios";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get("/get-blogs");
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
      <ul>
        {blogs.map((blog) => (
          <></>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
