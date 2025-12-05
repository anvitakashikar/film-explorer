import type { MovieShort } from "../types/movie";

const KEY = "favorites";

export function getFavorites(): MovieShort[] {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function isFavorite(id: string): boolean {
  const favs = getFavorites();
  return favs.some((m) => m.imdbID === id);
}

export function toggleFavorite(movie: MovieShort) {
  const favs = getFavorites();

  const exists = favs.find((m) => m.imdbID === movie.imdbID);

  let updated;

  if (exists) {
    updated = favs.filter((m) => m.imdbID !== movie.imdbID);
  } else {
    updated = [...favs, movie];
  }

  localStorage.setItem(KEY, JSON.stringify(updated));
}
