// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  photo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// Export actions for dispatching
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// Selectors
export const selectUserName = (state) => state.user.name;
export const selectUserPhoto = (state) => state.user.photo;

// Export the reducer
export default userSlice.reducer;
