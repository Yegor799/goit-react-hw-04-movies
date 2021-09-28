

const API_KEY = 'bb05cfd740979e91402f115d1bc9301a';

async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
}


export function fetchMovieById(movieId) {
  return fetchWithErrorHandling(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchCastInformation(movieId) {
  return fetchWithErrorHandling(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
}

export function fetchReviews(movieId) {
  return fetchWithErrorHandling(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
}

