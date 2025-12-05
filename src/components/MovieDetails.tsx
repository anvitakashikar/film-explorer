import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/movieService";

interface Movie {
  Poster: string;
  Title: string;
  Year: string;
  Runtime: string;
  Genre: string;
  Plot: string;
  Director: string;
  Writer: string;
  Actors: string;
  Language: string;
  BoxOffice: string;
  Ratings?: Array<{ Source: string; Value: string }>;
}

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) {
      getMovieDetails(id).then(setMovie);
    }
  }, [id]);

  if (!movie) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="details-container">
      <img src={movie.Poster} className="details-poster" />

      <div className="details-info">
        <h1>{movie.Title}</h1>
        <div className="sub">
          {movie.Ratings?.map((r) => (
              <div key={r.Source} className="rating-box">
                <p>{r.Source}</p>
                <b>{r.Value}</b>
              </div>
            ))}
          <p><b>Director:</b> {movie.Director}</p>
          <p><b>Writer:</b> {movie.Writer}</p>
          <p><b>Actors:</b> {movie.Actors}</p>
          <p><b>Language:</b> {movie.Language}</p>
          <p><b>Box Office:</b> {movie.BoxOffice}</p>
        </div>

        <h3>Ratings</h3>
        <div className="ratings">
          {movie.Ratings?.map((r: { Source: string; Value: string }) => (
            <div key={r.Source} className="rating-box">
              <p>{r.Source}</p>
              <b>{r.Value}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
