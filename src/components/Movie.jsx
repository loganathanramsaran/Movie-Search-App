import React, { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);


  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-10">This Is Our <span className="text-green-600">Movie Hub</span></h1>
      <h3 className="text-center font-semibold mb-10 mt-1 text-gray-700">Pick Your Favourites & Watch When You Free !</h3>
      <div className="flex justify-center flex-wrap gap-10 pb-10">
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <div className="flex flex-col w-50 h-75 justify-evenly items-center shadow-xl shadow-green-00 hover:bg-green-50 text-center">
              <img className="h-40 w-full" src={movie.Poster} alt={movie.Title} />
              <h2 className="font-semibold">{movie.Title}</h2>
              <p className="font-extrabold">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Movie;
