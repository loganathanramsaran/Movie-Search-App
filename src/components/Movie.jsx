import { useEffect, useState } from "react";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("movie"); // Default type: "movie"
  const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  ); // State to manage favourites
  const API_KEY = "948b3cac";

  useEffect(() => {
    fetchAllMovies();
  }, [type]);

  const fetchAllMovies = async () => {
    setLoading(true); // Show loading indicator
    let allMovies = [];
    let page = 1;
    let totalResults = 0;

    try {
      do {
        const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=star&type=${type}&page=${page}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.Search) {
          allMovies = [...allMovies, ...data.Search];
          totalResults = parseInt(data.totalResults, 10);
          page++;
        } else {
          break;
        }
      } while (allMovies.length < totalResults); // Fetch until all pages are loaded

      setMovies(allMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };
  const toggleFavourite = (movie) => {
    let updatedFavourites;
    if (favourites.some((fav) => fav.imdbID === movie.imdbID)) {
      updatedFavourites = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    } else {
      updatedFavourites = [...favourites, movie];
    } 
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  }
  

  return (
    <div className="p-4 min-h-110 flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-2xl font-bold mb-4 text-center">Select Movie Type</h1>

      {/* Dropdown for selecting movie type */}
      <select 
        value={type} 
        onChange={(e) => setType(e.target.value)}
        className="border-2 border-green-600 px-10 py-2 bg-white rounded-lg cursor-pointer font-bold hover:text-white hover:bg-green-500"
      >
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>

      {/* Loading Indicator */}
      {loading && <p className="text-green-700 text-lg font-bold mt-4">
        Loading movies...</p>}
      
      {/* Movie List */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="flex flex-col justify-between p-2 shadow-xl rounded-xl bg-white hover:bg-green-100 scale-75 hover:scale-85 transition-transform duration-300 ease-in-out">
              <img src={movie.Poster} alt={movie.Title} className="w-50 h-50" />
              <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
              <p className="font-semibold text-gray-600">{movie.Year}</p>
              <p className="font-semibold text-red-600">{movie.Type}</p>
              <button 
                className={`cursor-pointer px-2 py-1 font-semibold mx-auto content-center text-sm ${
                  favourites.some((fav) => fav.imdbID === movie.imdbID)
                    ? "bg-red-500"
                    : "bg-green-500"
                } text-white rounded`}
                onClick={() => toggleFavourite(movie)}
              >
                {favourites.some((fav) => fav.imdbID === movie.imdbID)
                  ? "Remove Favorite"
                  : "Add to Favorites"}
              </button>
            </div>
          ))
        ) : (
          !loading && <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
