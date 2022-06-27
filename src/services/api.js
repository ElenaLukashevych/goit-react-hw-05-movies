import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'c46f114dbea28bcbc0da4b37aad3806b';

export async function getTrending() {
const response = await axios.get(
    `trending/movie/day?api_key=${KEY}`
  );
  return response.data.results;
};

export async function getSearchMovies(searchQuery) {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${searchQuery}`
  );
  return response.data.results;  
};

export async function getMovieDetails(movieId) {
 const response = await axios.get(
    `movie/${movieId}?api_key=${KEY}`
  );
  return response.data;  
};

export async function getMovieCredits(movieId) {
    const response = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}`
  );
  return response.data;  
};

export async function getMovieReviews(movieId) {
     const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}`
  );
  return response.data; 
};

