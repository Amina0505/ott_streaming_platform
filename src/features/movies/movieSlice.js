// movieSlice.js
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

// Fetch Latest Tamil Movies
export const fetchLatestTamilMovies = createAsyncThunk(
  'movies/fetchLatestTamilMovies',
  async () => {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ta&sort_by=release_date.desc&page=1&with_original_language=ta`
    );
    return response.data.results;
  }
);

// Fetch Recently Released Hindi Action Movies
export const fetchHindiActionMovies = createAsyncThunk(
  'movies/fetchHindiActionMovies',
  async () => {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=hi&sort_by=popularity.desc&page=1&with_original_language=hi&with_genres=28` // Genre ID for Action is typically 28
    );
    return response.data.results;
  }
);

// Fetch Malayalam Drama Movies
export const fetchMalayalamDramaMovies = createAsyncThunk(
  'movies/fetchMalayalamDramaMovies',
  async () => {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ml&sort_by=release_date.desc&page=1&with_original_language=ml&with_genres=18` // Genre ID for Drama is typically 18
    );
    return response.data.results;
  }
);

// Fetch Popular Comedy Movies in Malayalam
export const fetchPopularComedyMalayalamMovies = createAsyncThunk(
  'movies/fetchPopularComedyMalayalamMovies',
  async () => {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ml&sort_by=popularity.desc&page=1&with_original_language=ml&with_genres=35` // Genre ID for Comedy is typically 35
    );
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    recommended: [],
    newDisney: [],
    latestMalayalam: [],
    latestTamil: [],
    hindiAction: [], // Add this line for Hindi action movies
    malayalamDrama: [],
    popularComedyMalayalam: [],
    status: 'idle',
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
      })
      // Handle Latest Tamil Movies
      .addCase(fetchLatestTamilMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLatestTamilMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.latestTamil = action.payload;
      })
      .addCase(fetchLatestTamilMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle Hindi Action Movies
      .addCase(fetchHindiActionMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHindiActionMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hindiAction = action.payload; // Store Hindi action movies in the state
      })
      .addCase(fetchHindiActionMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle Malayalam Drama Movies
      .addCase(fetchMalayalamDramaMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMalayalamDramaMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.malayalamDrama = action.payload;
      })
      .addCase(fetchMalayalamDramaMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Handle Popular Comedy Malayalam Movies
      .addCase(fetchPopularComedyMalayalamMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularComedyMalayalamMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.popularComedyMalayalam = action.payload; // Store the comedy movies in the state
      })
      .addCase(fetchPopularComedyMalayalamMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Selectors
export const selectRecommend = (state) => state.movies.recommended;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectLatestMalayalam = (state) => state.movies.latestMalayalam;
export const selectLatestTamil = (state) => state.movies.latestTamil;
export const selectHindiAction = (state) => state.movies.hindiAction; // New selector for Hindi action movies
export const selectMalayalamDrama = (state) => state.movies.malayalamDrama; // Selector for Malayalam drama movies
export const selectPopularComedyMalayalam = (state) => state.movies.popularComedyMalayalam; // New selector for popular comedy movies

export default movieSlice.reducer;
