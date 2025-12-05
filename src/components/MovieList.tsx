import type { MovieShort } from "../types/movie";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }: { movies: MovieShort[] }) {
  return (
    <div className="movie-grid">
      {movies.map((m) => (
        <MovieCard key={m.imdbID} movie={m} />
      ))}
    </div>
  );
}
