import React from "react";
import Skeleton from "react-loading-skeleton";

const BlogCardSkeleton = () => {
  return (
    <>
      <div className="w-full mb-4">
        <Skeleton height={120} />
      </div>
      <p className="mb-3">
        <Skeleton count={3} height={20} />
      </p>
    </>
  );
};

export default BlogCardSkeleton;
