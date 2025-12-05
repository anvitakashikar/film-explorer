const API_KEY = "d03be7a7";
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query: string, page: number = 1) {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`
  );

  const data = await res.json();
  return data;
}

export async function getMovieById(id: string) {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
  );

  const data = await res.json();
  return data;
}

// ✅ QUICK SUGGESTIONS (LIMITED)
export async function getSuggestions(query: string) {
  if (!query) return [];

  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(
    query
  )}&page=1`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === "False") return [];

  return data.Search.slice(0, 5); // ✅ only top 5 suggestions
}

// ✅ FULL MOVIE DETAILS
export async function getMovieDetails(id: string) {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  const data = await res.json();
  return data;
}
