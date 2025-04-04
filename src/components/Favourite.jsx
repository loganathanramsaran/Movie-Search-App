import { useState, useEffect } from "react";

const Favorites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>

      {favourites.length === 0 ? (
        <p className="text-gray-500">No favorite movies added.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favourites.map((movie) => (
            <div key={movie.imdbID} className="border p-2 rounded-lg shadow-lg">
              <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
              <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
              <p className="text-sm text-gray-600">{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
