import { useEffect, useState } from "react";
import { getSuggestions } from "../api/movieService";
import { useNavigate } from "react-router-dom";

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
};

type Props = {
  onSearch: (q: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [q, setQ] = useState("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const navigate = useNavigate();

  // ✅ DEBOUNCED SUGGESTION FETCH
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (q.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      const results = await getSuggestions(q);
      setSuggestions(results);
    }, 400); // ✅ debounce delay

    return () => clearTimeout(timer);
  }, [q]);

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (q.trim()) {
      setSuggestions([]);
      onSearch(q.trim());
    }
  };

  const openMovie = (id: string) => {
    setSuggestions([]);
    navigate(`/movie/${id}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <form onSubmit={submit} className="search-form">
        <input
          className="search-input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search movies..."
        />
        <button className="search-btn">Search</button>
      </form>

      {/* ✅ SUGGESTION DROPDOWN */}
      {suggestions.length > 0 && (
        <div className="suggest-box">
          {suggestions.map((m) => (
            <div
              key={m.imdbID}
              className="suggest-item"
              onClick={() => openMovie(m.imdbID)}
            >
              {m.Title} ({m.Year})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
