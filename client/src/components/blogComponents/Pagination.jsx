import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

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
        <FaArrowLeftLong />
      </button>
      <p className="font-qs text-text  font-bold">
        {currentPage} / {totalPages} pages.
      </p>
      <button
        disabled={currentPage === totalPages}
        onClick={onNext}
        className={`rounded-md font-qs bg-bg text-accentSecondary p-4 hover:bg-brand hover:text-bg transition-all duration-300 ease-in-out ${
          currentPage === totalPages ? "hidden" : ""
        }`}
      >
       <FaArrowRightLong />
      </button>
    </div>
  );
};

export default Pagination;
