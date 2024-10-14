// BlogList.js
import React from "react";
import Pagination from "./Pagination";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "../skeletonComponents/blogCardSkeleton";

const BlogRow = ({ blogs, currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="w-3/4 flex flex-col items-center">
      <div>
        <div className="row">
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <div>
              {Array.from({ length: 3 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </div>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      </div>
    </div>
  );
};

export default BlogRow;
