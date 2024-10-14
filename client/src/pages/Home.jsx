import React, { useState, useEffect } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import DestinationSkeleton from "../components/skeletonComponents/destinationSkeleton";
import axios from "axios";
import { MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router-dom";

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
  const [selectedContinent, setSelectedContinent] = useState(continents[0]);
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

  useEffect(() => {
    fetchBlogByContinent(selectedContinent);
  }, [selectedContinent]);

  return (
    <div className="mt-28 min-h-[calc(100dvh-5rem)] w-screen flex flex-col items-center">
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
          />
          <FaCircleChevronRight
            size={40}
            className="text-brand hover:text-accentPrimary hover:cursor-pointer transition-all duration-500 ease-in-out"
          />
        </div>
      </div>

      <div className="w-3/4 flex justify-center items-center mb-8">
        <ul className="flex flex-wrap gap-2 justify-evenly mt-16 w-full items-center lg:justify-start">
          {continents.map((continent, idx) => (
            <li
              key={idx}
              className={`hover:cursor-pointer py-1 px-2 flex rounded-md bg-bg text-accentSecondary hover:bg-brand hover:text-bg transition-all duration-500 ease-in-out ${
                selectedContinent === continent ? "bg-brand text-bg" : ""
              }`}
              onClick={() => setSelectedContinent(continent)}
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
        <p>No blogs found for this continent.</p>
      )}
    </div>
  );
};

export default Home;
