import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // To store search results

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        handleSearch();
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
    <div className="w-75 mb-3">
      <form>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative" onClick={handleShow}>
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="search"
            id="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
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
