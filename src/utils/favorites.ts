import type { MovieShort } from "../types/movie";

const KEY = "film_explorer_favorites";

export function getFavorites(): MovieShort[] {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function isFavorite(id: string): boolean {
  const favs = getFavorites();
  return favs.some((m) => m.imdbID === id);
}

export function toggleFavorite(movie: MovieShort) {
  let favs = getFavorites();

  if (isFavorite(movie.imdbID)) {
    favs = favs.filter((m) => m.imdbID !== movie.imdbID);
  } else {
    favs.push(movie);
  }

  localStorage.setItem(KEY, JSON.stringify(favs));
}
