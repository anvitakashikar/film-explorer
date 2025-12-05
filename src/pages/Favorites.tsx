import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import type { MovieShort } from "../types/movie";
import { getFavorites } from "../utils/favorites";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [movies, setMovies] = useState<MovieShort[]>([]);

  useEffect(() => {
    const update = () => setMovies(getFavorites());
    update();

    window.addEventListener("storage", update);
    return () => window.removeEventListener("storage", update);
  }, []);

  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <h2>No favorites yet ❤️</h2>
        <p>Add movies from the search page.</p>
        <Link to="/search" className="landing-btn primary">
          Go to Search
        </Link>
      </div>
    );
  }

  return (
    <main>
      <h2 className="page-title">Your Favorites</h2>
      <MovieList movies={movies} />
    </main>
  );
}
