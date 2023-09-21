import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const PlayedGames = createSlice({
  name: 'played Games',
  initialState,
  reducers: {
    insertHistory: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { insertHistory } = PlayedGames.actions;

export default PlayedGames.reducer;
