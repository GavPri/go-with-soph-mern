import React from "react";
import Skeleton from "react-loading-skeleton";

const BlogSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero skeleton */}
      <div className="w-3/4 h-[350px] mb-8">
        <Skeleton height={355} />
      </div>
      <div className="w-3/4 h-[350px] ">
        <Skeleton count={6.5} />
      </div>
    </div>
  );
};

export default BlogSkeleton;
