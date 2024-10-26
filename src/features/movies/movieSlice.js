import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace with your actual TMDB API key
const API_KEY = 'e0e0d8b5cc964b11285715d5eef3642e';
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch Recommended Movies
export const fetchRecommendedMovies = createAsyncThunk(
  'movies/fetchRecommendedMovies',
  async () => {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  }
);

// Fetch New Disney Movies
export const fetchNewDisneyMovies = createAsyncThunk(
  'movies/fetchNewDisneyMovies',
  async () => {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_companies=2&page=1`
    );
    return response.data.results;
  }
);

// Fetch Latest Malayalam Movies
export const fetchLatestMalayalamMovies = createAsyncThunk(
  'movies/fetchLatestMalayalamMovies',
  async () => {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ml&sort_by=release_date.desc&page=1&with_original_language=ml`
    );
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    recommended: [],           // State for recommended movies
    newDisney: [],            // State for new Disney movies
    latestMalayalam: [],      // State for latest Malayalam movies
    status: 'idle',            // Can be 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Recommended Movies
      .addCase(fetchRecommendedMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecommendedMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recommended = action.payload;
      })
      .addCase(fetchRecommendedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle New Disney Movies
      .addCase(fetchNewDisneyMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewDisneyMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.newDisney = action.payload;
      })
      .addCase(fetchNewDisneyMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle Latest Malayalam Movies
      .addCase(fetchLatestMalayalamMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLatestMalayalamMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.latestMalayalam = action.payload;
      })
      .addCase(fetchLatestMalayalamMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectRecommend = (state) => state.movies.recommended;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectLatestMalayalam = (state) => state.movies.latestMalayalam;

export default movieSlice.reducer;
