import React, { useEffect, useState } from "react";

const LikedBlogs = () => {
  const [likedBlogs, setLikedBlogs] = useState([]); // state for storing blog posts.

  useEffect(() => {
    const fetchLikedPosts = async () => {
      try {
        const response = axios.get("/liked-blogs", { withCredentials: true });
        setLikedBlogs(response.data.likedBlogs);
      } catch (error) {
        console.log("There was an error fetching the liked blogs", error);
      }
    };
    fetchLikedPosts();
  }, []);
  return <div>LikedBlogs</div>;
};

export default LikedBlogs;
