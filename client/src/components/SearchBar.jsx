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
    <div className="w-75 mb-3">
      {/* Form */}
      <form className="w-full">
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
    </div>
  );
};

export default SearchBar;
