import React, { useEffect, useState } from "react";

const BlogListings = () => {
  const [newestBlogs, setNewestBlogs] = useState([]);
  const [mostLikedBlogs, setMostLikedBlogs] = useState([]);

  useEffect(() => {
    getBlogListings() // todo create getBlogListings Fn
  },[])
  return <div>BlogListings</div>;
};

export default BlogListings;
