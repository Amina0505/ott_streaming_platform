// services/tmdb.js
import axios from "axios";

const API_KEY = "cfacde6feddbad78398140097c11dea4"; // Replace with your actual TMDB API key
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        return response.data.results;
    } catch (error) {
        console.error("Failed to fetch movies:", error);
        throw error;
    }
};

// Fetch trending Malayalam movies based on original language
export const fetchTrendingMalayalamMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ml&sort_by=popularity.desc&page=1`);
        return response.data.results;
    } catch (error) {
        console.error("Failed to fetch Malayalam movies:", error);
        throw error;
    }
};

export const fetchMoviesByLanguage = async (language) => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${language}&sort_by=popularity.desc&page=1`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to fetch ${language} movies:`, error);
        throw error;
    }
};

// Fetch movies by language and genre
export const fetchEntertainmentMoviesByLanguage = async (language, genreId) => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${language}&with_genres=${genreId}&sort_by=popularity.desc&page=1`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to fetch ${language} entertainment movies:`, error);
        throw error;
    }
};

// Fetch cartoon movies by language and genre
export const fetchCartoonMoviesByLanguage = async (language, genreId) => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${language}&with_genres=${genreId}&sort_by=popularity.desc&page=1`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to fetch ${language} cartoon movies:`, error);
        throw error;
    }
};

// Fetch movies by language and genre
export const fetchActionMoviesByLanguage = async (language, genreId) => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${language}&with_genres=${genreId}&sort_by=popularity.desc&page=1`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to fetch ${language} action movies:`, error);
        throw error;
    }
};

// Fetch romantic movies by language and genre
export const fetchRomanticMoviesByLanguage = async (language, genreId) => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${language}&with_genres=${genreId}&sort_by=popularity.desc&page=1`);
        return response.data.results;
    } catch (error) {
        console.error(`Failed to fetch ${language} romantic movies:`, error);
        throw error;
    }
};
// services/tmdb.js
export const fetchPopularMoviesByGenreAndLanguage = async (genreId, languageCode) => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: API_KEY,
                with_genres: genreId,
                language: languageCode,
                sort_by: "popularity.desc",
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error("Failed to fetch movies by genre and language:", error);
        throw error;
    }
};

// Fetch Tamil thriller movies
export const fetchTamilThrillerMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: API_KEY,
                with_genres: 53, // Thriller genre ID
                with_original_language: "ta", // Tamil language code
                sort_by: "popularity.desc",
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error("Failed to fetch Tamil thriller movies:", error);
        throw error;
    }
};

export const fetchMovieById = async (id) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie by ID:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  };
  
  export const fetchSimilarMovies = async (id, count) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&page=1`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch similar movies');
      }
      
      const data = await response.json();
      return data.results.slice(0, count); // Return only the specified number of movies
    } catch (error) {
      console.error('Error fetching similar movies:', error);
      throw error;
    }
  };
  

// Fetch popular Indian movies
export const fetchPopularIndianMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                api_key: API_KEY,
                with_original_language: 'hi', // Hindi language code
                sort_by: 'popularity.desc',
                page: 1
            }
        });
        return response.data.results;
    } catch (error) {
        console.error("Failed to fetch popular Indian movies:", error);
        throw error;
    }
};
