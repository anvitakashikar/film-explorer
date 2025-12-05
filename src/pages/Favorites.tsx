import { useState } from "react";
import MovieList from "../components/MovieList";
import { getFavorites } from "../utils/favorites";
import type { MovieShort } from "../types/movie";

export default function Favorites() {
  const [movies] = useState<MovieShort[]>(getFavorites());

  return (
    <main>
      <h1 className="favorites-title">Your Favorites</h1>

      {movies.length === 0 ? (
        <p style={{ textAlign: "center" }}>No favorites added yet ❤️</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </main>
  );
}
