import React, { useState, useEffect } from "react";
import HeroImage from "../assets/flim.png";
import movie from "../assets/movie.png";
const API_KEY = "948b3cac";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (query.length < 3) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&type=${type}&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
          setMovies([]);
        }
      } catch (err) {
        setError("Failed to fetch movies");
      }

      setLoading(false);
    };

    const debounceFetch = setTimeout(fetchMovies, 500); // Debounce API calls

    return () => clearTimeout(debounceFetch);
  }, [query, type]);

  return (
    <section
      className="min-h-[90vh] bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div>
        <h1 className="text-center text-5xl px-3 pt-10 font-bold  ">
          Welcome To Our <span className="text-green-600">Movie Hub</span>
        </h1>
        <h3 className="text-center font-semibold mt-2">
          <span className="text-green-700">Spend Time With Us,</span> We Are
          Responsible For Your Entertainment !
        </h3>
        <div className="search flex gap-10 h-50 justify-center items-center max-sm:flex-col">
          <input
            className="outline-none shadow-xl font-bold rounded-xl text-center text-green-700 border-3 border-green-400 bg-white hover:bg-green-100 max-md:w-[80%] w-100 h-12 "
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Your Favourite Movies..."
          />
          <select
            className="outline-none shadow-xl font-bold rounded-xl border-3 border-green-400 bg-white hover:bg-green-100 text-center cursor-pointer text-green-700 h-12 w-40 max-md:w-30 "
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
        </div>
        <div className="text-center ">
          {loading && (
            <p className="mx-auto animate-spin h-8 w-8 border-4 border-green-800 border-solid rounded-full border-t-transparent">
              {""}
            </p>
          )}
          {error && <p className="text-red-500 font-bold text-xl">{error}</p>}{" "}
        </div>

        {movies.find((movie) => movie.imdbID === movie.imdbID) === undefined ? (
          <div>
            <img className="h-70 w-70 mx-auto" src={movie} alt="" />
          </div>
        ) : (
          <div className="flex justify-center flex-wrap gap-10 pb-10">
            {movies.map((movie) => (
              <div key={movie.imdbID}>
                <div className="flex flex-col w-50 h-75 justify-between p-2 shadow-xl rounded-xl hover:bg-green-300 scale-90 hover:scale-95">
                  <img
                    className="h-40 w-full rounded-xl"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                  <h2 className="font-bold  text-green-700">
                    Movie : {movie.Title}
                  </h2>
                  <p className="font-extrabold text-red-500">
                    Year : {movie.Year}
                  </p>
                  <p className="font-semibold ">Type : {movie.Type}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Home;
