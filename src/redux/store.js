import { configureStore } from '@reduxjs/toolkit';
import RPSGameSlice from './features/RpsGameSlice';
import LeaderboardListSlice from './features/LeaderboardListSlice';
import GamesByIdSlice from './features/GamesByIdSlice';
import DynamicButton from './features/DynamicButton';
import DummyGames from './features/DummyGames';
import UserTokenSlice from './features/Auth/UserTokenSlice';
import AuthReducer from './features/Auth/AuthReducer';
import PlayedGames from './features/PlayedGames';

export const store = configureStore({
  reducer: {
    rpsgame: RPSGameSlice,
    leaderboard: LeaderboardListSlice,
    allgames: GamesByIdSlice,
    button: DynamicButton,
    DummyGames,
    usertoken: UserTokenSlice,
    authreducer: AuthReducer,
    gamehistory: PlayedGames,
  },
});
