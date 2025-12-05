import { useEffect, useState } from "react";
import { searchMovies } from "../api/movieService";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

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

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {/* ✅ SAFE check prevents crash */}
      {movies.length > 0 && <MovieList movies={movies} />}

      {/* ✅ SAFE load more */}
      {movies.length > 0 && !loading && (
        <div className="load-more-wrapper">
          <button className="load-btn" onClick={() => setPage((p) => p + 1)}>
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
