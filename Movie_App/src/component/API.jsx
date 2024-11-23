import React, { useState } from "react";
import axios from "axios";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const apiKey = "138a91f4"; // Replace with your API key

  const searchMovies = async () => {
    try {
      setError(""); // Clear previous errors
      const response = await axios.get(`http://www.omdbapi.com/`, {
        params: {
          s: query,
          apikey: apiKey,
          plot: "Short",
        },
      });
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setError(response.data.Error); // Show error message from API
        setMovies([]);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-6">Movie Search 🎬</h1>
      <div className="flex w-full max-w-md gap-2">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={searchMovies}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
        >
          Search
        </button>
      </div>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              loading="lazy"
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
              alt={`${movie.Title} Poster`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{movie.Title}</h2>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
