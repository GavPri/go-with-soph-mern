import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { _id } = useParams();
  console.log("Fetched ID:", _id);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("Fetched ID:", _id);
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
    <div className="mt-32 flex flex-col justify-center items-center w-full">
      {blogData ? (
        <div className="flex flex-col bg-bg w-3/4">
          <img
            src={blogData.heroImage}
            alt={blogData.title}
            className="rounded-lg"
          />
          <h1 className="font-qs text-text">{blogData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogPost;
