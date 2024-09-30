import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { _id } = useParams();
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(`/get-blogs/${_id}`);
        setBlogData(data);
        console.log(blogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [_id]);

  return (
    <div className="mt-32 flex flex-col justify-center items-center w-3/4">
      {blogData ? (
        <>
          <img src={blogData.heroImage} alt={blogData.title} />
          <h1>{blogData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
        </>
      ) : (
        <p>Loading...</p> // Render loading message while waiting for data
      )}
    </div>
  );
};

export default BlogPost;
