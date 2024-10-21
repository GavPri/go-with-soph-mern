import React, { useState, useEffect } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import DestinationSkeleton from "../components/skeletonComponents/destinationSkeleton";
import axios from "axios";
import { MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";

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
  const [selectedContinentIndex, setSelectedContinentIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const fetchBlogByContinent = async (continent) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/blogs/continent/${continent}`);
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
      setBlogs([]);
    } finally {
      setIsLoading(false);
    }
  };

  const changeContinent = (direction) => {
    setSelectedContinentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return continents.length - 1; // Go to the last continent if at the beginning
      if (newIndex >= continents.length) return 0; // Go to the first continent if at the end
      return newIndex;
    });
  };

  useEffect(() => {
    fetchBlogByContinent(continents[selectedContinentIndex]);
  }, [selectedContinentIndex]);

  return (
    <div className="mt-36 min-h-[calc(100dvh-5rem)] w-screen flex flex-col items-center">
      <div className="w-3/4 h-fit flex flex-col items-center lg:flex lg:flex-row lg:justify-between">
        <h2 className="font-qs text-text uppercase tracking-wide text-3xl text-left">
          Disc<span className="text-brand italic">o</span>ver Popula
          <span className="text-brand italic">r</span>
          <br />
          Destin<span className="text-brand italic">a</span>tions <br />
          <span className="text-brand normal-case text-sm"> - GoWithSoph</span>
        </h2>
        <div className="flex justify-between items-center w-3/4 mt-6 lg:w-1/4">
          <FaCircleChevronLeft
            size={40}
            className="text-brand hover:text-accentPrimary hover:cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => changeContinent(-1)} // Change continent to the left
          />
          <FaCircleChevronRight
            size={40}
            className="text-brand hover:text-accentPrimary hover:cursor-pointer transition-all duration-500 ease-in-out"
            onClick={() => changeContinent(1)} // Change continent to the right
          />
        </div>
      </div>

      <div className="w-3/4 flex justify-center items-center mb-8">
        <ul className="flex flex-wrap gap-2 justify-evenly mt-16 w-full items-center lg:justify-start">
          {continents.map((continent, idx) => (
            <li
              key={idx}
              className={`hover:cursor-pointer py-1 px-2 flex rounded-md bg-bg text-accentSecondary hover:bg-brand hover:text-bg transition-all duration-500 ease-in-out ${
                selectedContinentIndex === idx ? "bg-brand text-bg" : ""
              }`}
              onClick={() => setSelectedContinentIndex(idx)}
            >
              {continent}
            </li>
          ))}
        </ul>
      </div>

      {loading ? (
        <div className="w-3/4">
          <DestinationSkeleton cards={3} />
        </div>
      ) : blogs.length > 0 ? (
        <div
          className={`w-full flex gap-2 flex-col justify-center items-center lg:flex-row lg:w-3/4 lg:justify-start`}
        >
          {blogs.map((blog) => (
            <NavLink
              to={`/blog/${blog._id}`}
              key={blog._id}
              className="relative h-[400px] w-[300px] bg-cover bg-center rounded-md shadow-lg overflow-hidden mb-4 flex flex-col justify-end" // Added flex and justify-end
              style={{ backgroundImage: `url(${blog.heroImage})` }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="relative z-10 p-4 text-white">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <div className="flex justify-start items-center text-xl font-qs rounded-md bg-brand w-fit py-1 px-2">
                  <MdLocationPin className="mr-2" />{" "}
                  <p className="mr-2">{blog.destination}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-evenly border-1 border-accentSecondary items-center bg-bg text-text h-64 rounded-md p-4 text-lg shadow-md">
          <MdErrorOutline size={50} />
          <p className="">No blogs found for this continent.</p>
          <p className="italic text-sm">One day I'll make it there.</p>
          <p className="text-sm capitalize">Visit the <NavLink to="/blog" className="text-brand">blog page</NavLink> to view the latest posts</p>
        </div>
      )}
    </div>
  );
};

export default Home;
