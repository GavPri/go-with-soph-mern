import React from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import BlogCardSkeleton from "../components/skeletonComponents/blogCardSkeleton";
const continents = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Australia (Oceania)",
  "South America",
];

const Home = () => {
  return (
    <div className="mt-28 min-h-[calc(100dvh-5rem)] w-screen flex flex-col items-center">
      <div className="w-3/4 h-fit flex flex-col items-center lg:flex lg:flex-row lg:justify-between">
        {/* ----- Header & arrows div ---- */}
        <h2 className="font-qs text-text uppercase tracking-wide text-3xl text-left">
          Disc<span className="text-brand italic">o</span>ver Popula
          <span className="text-brand italic">r</span>
          <br />
          Destin<span className="text-brand italic">a</span>tions <br />
          <span className="text-brand normal-case text-sm"> - GoWithSoph</span>
        </h2>
        {/* ----- Arrow buttons ----- */}
        <div className="flex justify-between items-center w-3/4 mt-6 lg:w-1/4">
          <div>
            <FaCircleChevronLeft
              size={40}
              className="text-brand hover:text-accentPrimary hover:cursor-pointer transition-all duration-500 ease-in-out"
            />
          </div>
          <div>
            <FaCircleChevronRight
              size={40}
              className="text-brand hover:text-accentPrimary hover:cursor-pointer transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
      {/* ----- Continents Tab */}
      <div className="w-3/4 flex justify-center items-center mb-8">
        <ul className="flex flex-wrap gap-2 justify-evenly mt-16 w-full items-center lg:justify-start">
          {continents.map((continent, idx) => (
            <li
              key={idx}
              className="hover:cursor-pointer py-1 px-2 flex rounded-md bg-bg text-accentSecondary hover:bg-brand hover:text-bg transition-all duration-500 ease-in-out"
            >
              {continent}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <BlogCardSkeleton cards={3} />
      </div>
    </div>
  );
};

export default Home;
