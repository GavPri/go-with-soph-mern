import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogRow from "./BlogRow";

const BlogListings = () => {
  const [newestBlogs, setNewestBlogs] = useState([]);
  const [mostLikedBlogs, setMostLikedBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // set the current page
  const [totalPages, setTotalPages] = useState(1); // set total pages

  const getBlogListings = async () => {
    const { data: newestData } = await axios.get(
      "/get-blogs?page=1&limit=3&sortBy=newest"
    );
    setNewestBlogs(newestData);
    setTotalPages(newestData.totalPages);

    const { data: LikesData } = await axios.get(
      "/get-blogs?page=1&limit=3&sortBy=mostLiked"
    );
    setMostLikedBlogs(LikesData);
    setTotalPages(LikesData.totalPages);
  };

  useEffect(() => {
    getBlogListings(currentPage);
  }, [currentPage]);

  const handlePageChange =(newPage)=>{
    setCurrentPage(newPage); 
  }

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
