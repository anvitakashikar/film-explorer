import { useEffect, useState } from "react";
import { searchMovies } from "../api/movieService";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import MovieSkeleton from "../components/MovieSkeleton";


interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await searchMovies(query, page);

        if (data.Response === "True" && Array.isArray(data.Search)) {
          if (page === 1) {
            setMovies(data.Search);
          } else {
            setMovies((prev) => [...prev, ...data.Search]);
          }
        } else {
          setError("No movies found");
          setMovies([]);
        }
      } catch {
        setError("Failed to fetch movies");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page, query]);

  const handleSearch = (text: string) => {
    setQuery(text);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {loading && (
        <div className="movie-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <MovieSkeleton key={i} />
          ))}
        </div>
      )}


      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {/* ✅ SAFE check prevents crash */}
     {!loading && <MovieList movies={movies} />}

      {/* ✅ SAFE load more */}
      {movies.length > 0 && !loading && (
        <div className="load-more-wrapper">
          <button onClick={loadMore} className="load-btn" />
        </div>
      )}
    </>
  );
};

export default Home;
