import React from "react";
import type { MovieShort } from "../types/movie";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: MovieShort[] }) {
  if (movies.length === 0) return <div className="max-w-4xl mx-auto">No results</div>;
  return (
    <div className="max-w-4xl mx-auto grid gap-3">
      {movies.map((m) => <MovieCard key={m.imdbID} movie={m} />)}
    </div>
  );
}
