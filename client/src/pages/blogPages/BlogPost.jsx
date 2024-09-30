import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get("/get-blogs");
        setBlogData(response.data);
        console.log(setBlogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, []);

  return <div className="mt-32">BlogPost</div>;
};

export default BlogPost;
