import { useState } from "react";
import type { MovieShort } from "../types/movie";
import { Link } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../utils/favorites";

export default function MovieCard({ movie }: { movie: MovieShort }) {
  const [fav, setFav] = useState(isFavorite(movie.imdbID));

 const toggle = () => {
  toggleFavorite(movie);
  setFav(!fav);
  window.dispatchEvent(new Event("storage"));
};



  return (
    <article className="movie-card">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="movie-img"
      />

      <div className="movie-body">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-meta">
          {movie.Year} • {movie.Type}
        </p>

        <div className="movie-actions">
          <Link to={`/movie/${movie.imdbID}`} className="details-link">
            Details →
          </Link>

          <button className="fav-btn" onClick={toggle}>
            {fav ? "❌ Remove" : "❤️ Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
