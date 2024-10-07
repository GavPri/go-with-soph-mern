import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";

const LikedBlogs = () => {
  const [likedBlogs, setLikedBlogs] = useState([]); // state for storing blog posts.
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchLikedPosts = async () => {
      if (!user) {
        console.log("User not logged in");
        return;
      }
      try {
        const response = axios.get("/liked-blogs", { withCredentials: true });
        setLikedBlogs(response.data.likedBlogs);
      } catch (error) {
        console.log("There was an error fetching the liked blogs", error);
      }
    };
    fetchLikedPosts();
  }, [user]);
  return <div>LikedBlogs</div>;
};

export default LikedBlogs;
