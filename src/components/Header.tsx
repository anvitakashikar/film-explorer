import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="logo">
          <Link to="/">Film Explorer</Link>
        </h1>

        <Link to="/favorites" className="fav-link">
          ❤️ Favorites
        </Link>
      </div>
    </header>
  );
}
