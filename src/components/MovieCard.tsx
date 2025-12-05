import React, { useState } from "react";
import type { MovieShort } from "../types/movie";
import { Link } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../utils/favorites";

export default function MovieCard({ movie }: { movie: MovieShort }) {
  const [fav, setFav] = useState(isFavorite(movie.imdbID));

  const toggle = () => {
    toggleFavorite(movie);
    setFav(!fav);
  };

  return (
    <article className="border rounded p-2 flex gap-3 items-center justify-between">
      <div className="flex gap-3">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={movie.Title}
          className="w-24 h-36 object-cover"
        />
        <div>
          <h3 className="font-semibold">{movie.Title}</h3>
          <p className="text-sm">
            {movie.Year} • {movie.Type}
          </p>
          <Link
            to={`/movie/${movie.imdbID}`}
            className="text-sm text-blue-600 mt-2 inline-block"
          >
            View details →
          </Link>
        </div>
      </div>

      {/* ✅ FAVORITE BUTTON */}
      <button
        onClick={toggle}
        className="px-3 py-1 border rounded text-sm"
      >
        {fav ? "❌ Remove" : "❤️ Add"}
      </button>
    </article>
  );
}
