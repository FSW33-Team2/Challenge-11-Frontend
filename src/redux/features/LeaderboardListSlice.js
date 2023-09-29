import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../components/lib/axios'

const initialState = {
  data: [],
  loading: false,
}
export const fetchLeaderboard = createAsyncThunk('getAllScore', async () => {
  const response = await axios.get(`/api/score/leaderboard`)
  return response.data.data
})

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeaderboard.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLeaderboard.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchLeaderboard.rejected, (state) => {
        state.data = []
        state.loading = false
      })
  },
})

export default leaderboardSlice.reducer
