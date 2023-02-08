import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    query: '',
  },
  reducers: {
    getQuery(store, action) {
      store.query = action.payload;
    },
  },
});

export const { getQuery } = moviesSlice.actions;

export default moviesSlice.reducer;
