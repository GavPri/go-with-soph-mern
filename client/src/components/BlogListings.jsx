import axios from "axios";
import React, { useEffect, useState } from "react";

const BlogListings = () => {
  const [newestBlogs, setNewestBlogs] = useState([]);
  const [mostLikedBlogs, setMostLikedBlogs] = useState([]);

  const getBlogListings = async () => {
    const { data: newestData } = await axios.get(
      "/get-blogs?page=1&limit=3&sortBy=newest"
    );
    setNewestBlogs(newestData);

    const { data: LikesData } = await axios.get(
      "/get-blogs?page=1&limit=3&sortBy=newest"
    );
    setMostLikedBlogs(LikesData);
  };
  
  useEffect(() => {
    getBlogListings(); // todo create getBlogListings Fn
  }, []);


  return <div>BlogListings</div>;
};

export default BlogListings;
