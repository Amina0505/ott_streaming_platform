// movieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Replace with your actual TMDB API key
const API_KEY = 'e0e0d8b5cc964b11285715d5eef3642e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchRecommendedMovies = createAsyncThunk(
  'movies/fetchRecommendedMovies',
  async () => {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    recommended: [],
    status: 'idle', // can be 'idle', 'loading', 'succeeded', 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  }
});

export const selectRecommend = (state) => state.movies.recommended;
export default movieSlice.reducer;
