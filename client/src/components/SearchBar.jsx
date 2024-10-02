import axios from "axios";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

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
            </div>
          </form>

          {/* Search Results */}
          <div className="mt-4">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <NavLink
                  to={`/blogs/${result._id}`}
                  key={result._id}
                  className="mb-3 flex justify-between items-center p-2 bg-bg rounded-lg"
                >
                  <img
                    src={result.heroImage}
                    alt={result.title}
                    className="max-w-[33%] object-fill my-2 mr-2 rounded-lg"
                  />
                  <div className="flex flex-col ml-2 font-qs text-text basis-2/3 min-h-[200px] justify-between items-start">
                    <h5 className="text-2xl">{result.title}</h5>
                    <p>
                      <strong>Tags:</strong> {result.tags.join(", ")}
                    </p>
                    <p>
                      <strong>Destination:</strong> {result.destination}
                    </p>
                  </div>
                  <hr />
                </NavLink>
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
