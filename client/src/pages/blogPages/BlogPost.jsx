import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/get-blogs/${id}`);
        setBlogData(response.data);
        console.log(setBlogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="mt-32">
      {blogData.title}, {blogData.content}, {blogData.heroImage}
    </div>
  );
};

export default BlogPost;
