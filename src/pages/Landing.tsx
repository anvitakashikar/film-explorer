import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h1 className="landing-title">🎬 Film Explorer</h1>
      <p className="landing-sub">
        Discover movies, view details, and manage your favorites.
      </p>

      <div className="landing-actions">
        <Link to="/search" className="landing-btn primary">
          🔍 Search Movies
        </Link>

        <Link to="/favorites" className="landing-btn secondary">
          ❤️ View Favorites
        </Link>
      </div>
    </div>
  );
}
