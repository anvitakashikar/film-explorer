import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">🎬 MovieExplorer</Link>

      <nav>
        <Link to="/favorites" className="fav-link">
          ❤️ Favorites
        </Link>
      </nav>
    </header>
  );
}
