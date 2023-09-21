import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameInfo: '',
  isGameStarted: false,
  isGameFinished: false,
  currentRound: 0,
  playerChoice: '',
  botChoice: '',
  result: '',
  playerwinRound: 0,
  botwinRound: 0,
  playerScore: 0,
  botScore: 0,
};

export const RPSgameSlice = createSlice({
  name: 'RPS Game',
  initialState,
  reducers: {
    playRPSGame: (state, action) => {
      const { playerChoice, botChoice, result } = action.payload;
      state.result = result;
      state.playerChoice = playerChoice;
      state.botChoice = botChoice;
      state.isGameStarted = true;
      state.isGameFinished = false;
      state.currentRound += 1;
    },
    updateRound: (state, action) => {
      const { playerwinRound, botwinRound } = action.payload;
      state.playerwinRound += playerwinRound;
      state.botwinRound += botwinRound;
    },
    updateScore: (state, action) => {
      const { playerScore, botScore } = action.payload;
      state.playerScore += playerScore;
      state.botScore += botScore;
    },
    updateInfo: (state, action) => {
      state.gameInfo = action.payload;
    },
    finishGame: (state, action) => {
      state.isGameFinished = true;
      state.isGameStarted = false;
      state.gameInfo =
        'Game concluded, refresh or restart the game to play again';
    },
    resetGame: (state) => {
      state.gameInfo = '';
      state.isGameStarted = false;
      state.isGameFinished = false;
      state.currentRound = 0;
      state.playerChoice = '';
      state.botChoice = '';
      state.result = '';
      state.playerwinRound = 0;
      state.botwinRound = 0;
    },
    newGame: () => {
      return initialState;
    },
  },
});

export const {
  playRPSGame,
  updateScore,
  updateRound,
  updateInfo,
  newGame,
  finishGame,
  resetGame,
} = RPSgameSlice.actions;

export default RPSgameSlice.reducer;
