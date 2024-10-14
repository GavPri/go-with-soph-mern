import React from "react";
import Skeleton from "react-loading-skeleton";

const DestinationSkeleton = ({ cards }) => {
  return (
    <div className="w-full flex gap-2 flex-col justify-center items-center lg:flex-row lg:w-3/4 lg:justify-start">
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <Skeleton height={400} width={300} cards={cards} />
        ))}
    </div>
  );
};

export default DestinationSkeleton;
