import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
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

    return clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Function to handle search submission and fetch results
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/search-blogs/?q=${searchTerm}`);
      setSearchResults(response.data); // Store the results in state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Form Container
    <div className="w-75 mb-3 relative">
      {/* Form */}
      <form className="w-full" onSubmit={handleSearch}>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        {/* Input wrapper */}
        <div class="flex items-center w-full bg-bg drop-shadow-md">
          {/* Icon wrapper */}
          <div class="w-2/12 mr-2 flex justify-center items-center p-2 focus:outline-none focus:ring-0">
            <IoMdSearch className="text-text bg-transparent" />
          </div>
          {/* Input */}
          <input
            type="search"
            id="search"
            class="block w-8/12 py-2 px-4 text-sm  text-text bg-bg"
            placeholder="Type here to search..."
            required
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </form>
      {/* Form to display search reaults. */}
      <div className="absolute left-0 right-0 bottom-0 bg-bg drop-shadow-md max-h-60 overflow-y-auto z-50 rounded-md w-full">
        {isSearching && <p>Loading results</p>}
        {!isSearching && searchResults.length > 0 ? (
          searchResults.map((results) => (
            <NavLink
              key={results._id}
              to={`/blog/${results._id}`}
              className={`w-10/12 p-4 font-qs text-text bg-bg rounded-md`}
            >
              <div className="w-4/12">
                <h3>{results.title}</h3>
                <h4>{results.destination}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {results.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="rounded-md border-2 border-brand bg-bg text-text drop-shadow-sm font-qs"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </NavLink>
          ))
        ) : (
          <>{!isSearching && <p>No results found.</p>}</>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
