import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogRow from "./BlogRow";

const BlogListings = () => {
  // state for newest blog posts
  const [newestBlogs, setNewestBlogs] = useState([]);
  const [newestCurrentPage, setNewestCurrentPage] = useState(1);
  const [newestTotalPages, setNewestTotalPage] = useState(1);

  //state for most popular blogs.
  const [mostLikedBlogs, setMostLikedBlogs] = useState([]);
  const [mostLikedCurrentPage, setMostLikedCurrentPage] = useState(1);
  const [mostLikedTotalPages, setMostLikedTotalPages] = useState(1);

  const getBlogListings = async () => {
    const { data: newestData } = await axios.get(
      "/get-blogs?page=1&limit=3&sortBy=newest"
    );
    setNewestBlogs(newestData);
    setNewestTotalPage(newestData.totalPages);

    const { data: LikesData } = await axios.get(
      "/get-blogs?page=1&limit=3&sortBy=mostLiked"
    );
    setMostLikedBlogs(LikesData);
    setMostLikedTotalPages(LikesData.totalPages);
  };

  useEffect(() => {
    getBlogListings(currentPage);
  }, [newestCurrentPage, mostLikedCurrentPage]);

  const handleNewestNextPage = () => {}
  
  const handleNewestPreviousPage = () => {};

  const handleMostLikedNextPage = () => {};
  
  const handleMostLikedPage = () => {};
  return (
    <div className=" flex flex-col justify-center items-center w-full font-qs text-text text-xl">
      <h2 className="my-6 text-text font-qs tracking-wide font-bold">
        Latest from <span className="text-brand">GoWithSoph</span>
      </h2>
      <BlogRow blogs={newestBlogs} />
      <h2 className="my-6 text-text font-qs tracking-wide font-bold">
        Most Liked from <span className="text-brand">GoWithSoph</span>
      </h2>
      <BlogRow blogs={mostLikedBlogs} />
    </div>
  );
};

export default BlogListings;
