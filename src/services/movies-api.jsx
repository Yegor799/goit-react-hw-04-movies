import axios from "axios";

const API_KEY = 'bb05cfd740979e91402f115d1bc9301a';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling("https://api.themoviedb.org/3/trending/movie/day?api_key=bb05cfd740979e91402f115d1bc9301a");
}

// export function fetchBooks() {
//   return fetchWithErrorHandling(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
// }