import React from "react";

const Pagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={onPrevious}
        className={`rounded-md font-qs bg-bg text-accentSecondary p-4 hover:bg-brand hover:text-bg transition-all duration-300 ease-in-out ${
          currentPage === 1 ? "hidden" : ""
        }`}
      >
        Previous Post
      </button>
      <p className="font-qs text-brand font-bold">
        {currentPage} / <span className="text-text">{totalPages}</span>
      </p>
      <button
        disabled={currentPage === totalPages}
        onClick={onNext}
        className={`rounded-md font-qs bg-bg text-accentSecondary p-4 hover:bg-brand hover:text-bg transition-all duration-300 ease-in-out ${
          currentPage === totalPages ? "hidden" : ""
        }`}
      >
        Next Post
      </button>
    </div>
  );
};

export default Pagination;
