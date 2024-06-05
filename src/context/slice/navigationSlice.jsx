import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentPage: 'home',
  },
  reducers: {
    navigate: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { navigate } = navigationSlice.actions;
export default navigationSlice.reducer;
