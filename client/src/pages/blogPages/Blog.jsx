import React from "react";
import SearchBar from "../../components/SearchBar";
import BlogListings from "../../components/blogComponents/BlogListings";

const Blog = () => {
  return (
    <div className="mt-36 flex flex-col justify-center items-center w-full font-qs text-text text-xl">
      <SearchBar />
      <BlogListings />
    </div>
  );
};

export default Blog;
