import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  return <div className="mt-32">BlogPost</div>;
};

export default BlogPost;
