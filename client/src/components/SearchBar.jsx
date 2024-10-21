import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // To store search results

  // Prevent API calls with each key stroke.
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        handleSearch();
        console.log(searchTerm);
      }
    }, 750);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Function to handle search submission and fetch results
  const handleSearch = async (e) => {
    setIsSearching(true);
    try {
      const response = await axios.get(`/search-blogs/?q=${searchTerm}`);
      setSearchResults(response.data); // Store the results in state
    } catch (error) {
      console.log(error);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    setSearchTerm(""), setSearchResults([]);
  }, [location.pathname]);

  return (
    // Form Container
    <div className="w-75 mb-3 relative">
      {/* Form */}
      <div className="w-full">
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        {/* Input wrapper */}
        <div class="h-16 rounded-md border-1 border-accentSecondary flex items-center w-full bg-bg drop-shadow-md">
          {/* Icon wrapper */}
          <div class="w-2/12 mr-2 flex justify-center items-center p-2 ">
            <IoMdSearch className="text-text bg-transparent" />
          </div>
          {/* Input */}
          <input
            type="search"
            id="search"
            class="block w-8/12 py-2 px-4 text-sm  text-text bg-bg focus:outline-none focus:ring-0"
            placeholder="Type here to search..."
            required
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      {/* Form to display search reaults. */}
      <div className="absolute left-0 right-0 -bottom-50 bg-bg drop-shadow-md max-h-[350px] overflow-y-auto z-50 rounded-md w-3/4">
        {isSearching && <p>Loading results</p>}
        {!isSearching && searchResults.length > 0 ? (
          searchResults.map((results) => (
            <NavLink
              key={results._id}
              to={`/blog/${results._id}`}
              className={`w-full p-4 font-qs text-text bg-bg rounded-md flex justify-between my-2 hover:bg-accentSecondary hover:text-bg transition-all duration-500 ease-in-out`}
            >
              <div className="w-full lg:w-6/12 flex  flex-col justify-between items-start px-2">
                <h3 className="text-xl font-qs mb-2">{results.title}</h3>
              </div>
            </NavLink>
          ))
        ) : (
          <>
            <p
              className={`${
                searchResults.length === 0 && searchTerm.length > 0
                  ? "inline-block font-qs p-4"
                  : "hidden"
              }`}
            >
              No results found.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
