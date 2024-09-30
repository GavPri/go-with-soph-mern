import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { response } = await axios.get(`/get-blogs/${_id}`);
        setBlogData(response);
        console.log(setBlogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="mt-32 flex flex-col justify-center items-center w-3/4">
      <div>{blogData.heroImage}</div>
      <div>{blogData.title}</div>
      <div>{blogData.content}</div>
    </div>
  );
};

export default BlogPost;
