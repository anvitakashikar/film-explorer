import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieById } from "../api/movieService";
import type { MovieDetail } from "../types/movie";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    getMovieById(id)
      .then((m) => {
        if (m.Response === "False") setError(m.Error || "Not found");
        else setMovie(m);
      })
      .catch((e) => setError(e.message || "Error"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="max-w-4xl mx-auto">Loading...</div>;
  if (error) return <div className="max-w-4xl mx-auto text-red-600">{error}</div>;
  if (!movie) return null;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-blue-600">← Back</Link>
      <div className="mt-4 flex gap-4">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} alt={movie.Title} className="w-48 h-[320px] object-cover" />
        <div>
          <h2 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h2>
          <p className="mt-2">{movie.Plot}</p>
          <p className="mt-2"><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </main>
  );
}
