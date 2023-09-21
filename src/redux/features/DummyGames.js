import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player1Score: null,
  player2Score: null,
  player3Score: null,
  player4Score: null,
};

export const DummyGamesSlice = createSlice({
  name: 'Dummy Games',
  initialState,
  reducers: {
    loadScore: (state, action) => {
      const { player1Score, player2Score, player3Score, player4Score } =
        action.payload;
      state.player1Score = player1Score;
      state.player2Score = player2Score;
      state.player3Score = player3Score;
      state.player4Score = player4Score;
    },
  },
});

export const { loadScore } = DummyGamesSlice.actions;

export default DummyGamesSlice.reducer;
