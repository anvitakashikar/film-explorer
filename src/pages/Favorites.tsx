import React, { useState } from "react";
import MovieList from "../components/MovieList";
import type { MovieShort } from "../types/movie";
import { getFavorites } from "../utils/favorites";

export default function Favorites() {
  const [movies] = useState<MovieShort[]>(getFavorites);

  return (
    <main>
      <h2 className="page-title">
        ❤️ Your Favorites
      </h2>

      {movies.length === 0 ? (
        <div className="max-w-4xl mx-auto">No favorites added yet.</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </main>
  );
}
