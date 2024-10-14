// BlogList.js
import React from "react";
import Pagination from "./Pagination";
import BlogCard from "./BlogCard";

const BlogRow = ({ blogs, currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="w-3/4 flex flex-col items-center">
      <div>
        <div className="row">
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <p>No blogs available</p>
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
