import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <button className="rounded-md border-border font-qs bg-bg text-accentSecondary p-4">
        Previous Post
      </button>
      <button className="rounded-md border-border font-qs bg-bg text-accentSecondary p-4">
        Next Post
      </button>
    </div>
  );
};

export default Pagination;
