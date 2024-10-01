import axios from "axios";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const [searchResults, setSearchResults] = useState([]); // To store search results

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to handle search submission and fetch results
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/blog/search?q=${searchTerm}`);
      setSearchResults(response.data); // Store the results in state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-75 mb-3">
      <form onSubmit={handleSearch}>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative" onClick={handleShow}>
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
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
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      {/* Modal that opens on search button click */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Search Results</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display the search input inside the modal */}
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                className="block w-full p-4 ps-10 text-sm text-text border border-border rounded-lg focus:ring-accentPrimary focus:border-accentPrimary"
                placeholder="Search"
                required
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-brand hover:bg-brand focus:ring-4 focus:outline-none focus:ring-border font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>

          {/* Search Results */}
          <div className="mt-4">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <div key={result._id} className="mb-3">
                  <h5>{result.title}</h5>
                  <p>{result.content}</p>
                  <p>
                    <strong>Tags:</strong> {result.tags.join(", ")}
                  </p>
                  <p>
                    <strong>Destinations:</strong> {result.destinations}
                  </p>
                  <hr />
                </div>
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SearchBar;
