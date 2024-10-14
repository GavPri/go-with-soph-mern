import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogRow from "./BlogRow";
import BlogCardSkeleton from "../skeletonComponents/blogCardSkeleton";

const BlogListings = () => {
  // state for newest blog posts
  const [newestBlogs, setNewestBlogs] = useState([]);
  const [newestCurrentPage, setNewestCurrentPage] = useState(1);
  const [newestTotalPages, setNewestTotalPage] = useState(1);
  const [newestIsLoading, setNewestIsLoading] = useState(false);

  //state for most popular blogs.
  const [mostLikedBlogs, setMostLikedBlogs] = useState([]);
  const [mostLikedCurrentPage, setMostLikedCurrentPage] = useState(1);
  const [mostLikedTotalPages, setMostLikedTotalPages] = useState(1);
  const [mostLikedIsLoading, setMostLikedIsLoading] = useState(false);

  const getBlogListings = async () => {
    setNewestIsLoading(true);
    const { data: newestData } = await axios.get(
      `/get-blogs?page=${newestCurrentPage}&limit=3&sortBy=newest`
    );
    console.log(newestData);
    setNewestBlogs(newestData.blogs);
    setNewestTotalPage(newestData.totalPages);
    setNewestIsLoading(false);

    setMostLikedIsLoading(true);
    const { data: LikesData } = await axios.get(
      `/get-blogs?page=${mostLikedCurrentPage}&limit=3&sortBy=mostLiked`
    );
    setMostLikedBlogs(LikesData.blogs);
    setMostLikedTotalPages(LikesData.totalPages);
    setMostLikedIsLoading(false);
  };

  useEffect(() => {
    getBlogListings();
  }, [newestCurrentPage, mostLikedCurrentPage]);

  const handleNewestNextPage = () => {
    if (newestCurrentPage < newestTotalPages) {
      setNewestCurrentPage((prev) => prev + 1);
    }
  };

  const handleNewestPreviousPage = () => {
    if (newestCurrentPage > 1) {
      setNewestCurrentPage((prev) => prev - 1);
    }
  };

  const handleMostLikedNextPage = () => {
    if (mostLikedCurrentPage < mostLikedTotalPages) {
      setMostLikedCurrentPage((prev) => prev + 1);
    }
  };

  const handleMostLikedPreviousPage = () => {
    if (mostLikedCurrentPage > 1) {
      setMostLikedCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center w-full font-qs text-text text-xl">
      <h2 className="my-6 text-text font-qs tracking-wide font-bold">
        Latest from <span className="text-brand">GoWithSoph</span>
      </h2>
      {newestIsLoading ? (
        <BlogCardSkeleton cards={3} />
      ) : (
        <BlogRow
          blogs={newestBlogs}
          currentPage={newestCurrentPage}
          onNext={handleNewestNextPage}
          onPrevious={handleNewestPreviousPage}
          totalPages={newestTotalPages}
        />
      )}

      <h2 className="my-6 text-text font-qs tracking-wide font-bold">
        Most Liked from <span className="text-brand">GoWithSoph</span>
      </h2>
      {mostLikedIsLoading ? (
        <BlogCardSkeleton cards={3} />
      ) : (
        <BlogRow
          blogs={mostLikedBlogs}
          currentPage={mostLikedCurrentPage}
          onNext={handleMostLikedNextPage}
          onPrevious={handleMostLikedPreviousPage}
          totalPages={mostLikedTotalPages}
        />
      )}
    </div>
  );
};

export default BlogListings;
