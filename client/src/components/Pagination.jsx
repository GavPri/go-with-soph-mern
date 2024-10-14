import React from "react";

const Pagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <button
        disabled={currentPage === 1}
        onPrevious={onPrevious}
        className="rounded-md font-qs bg-bg text-accentSecondary p-4 hover:bg-brand hover:text-bg transition-all duration-300 ease-in-out"
      >
        Previous Post
      </button>
      <button
        disabled={currentPage === totalPages}
        onNext={onNext}
        className="rounded-md font-qs bg-bg text-accentSecondary p-4 hover:bg-brand hover:text-bg transition-all duration-300 ease-in-out"
      >
        Next Post
      </button>
    </div>
  );
};

export default Pagination;
