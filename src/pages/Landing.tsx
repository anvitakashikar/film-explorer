import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="landing">
      <h1 className="landing-title">🎬 Film Explorer</h1>
      <p className="landing-sub">
        Search movies, view details, and save your favorites.
      </p>

      <div className="landing-actions">
        <Link to="/search" className="landing-btn primary">
          🔍 Start Searching
        </Link>
        <Link to="/favorites" className="landing-btn secondary">
          ❤️ View Favorites
        </Link>
      </div>
    </main>
  );
}
