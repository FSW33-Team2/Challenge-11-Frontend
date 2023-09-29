import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../components/lib/axios'

const initialState = {
  data: [],
  loading: false,
}
export const fetchAllGames = createAsyncThunk('getAllGames', async () => {
  const response = await axios.get(`/api/game`)
  return response.data.data
})

const getGamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGames.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchAllGames.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchAllGames.rejected, (state) => {
        state.data = []
        state.loading = false
      })
  },
})

export default getGamesSlice.reducer
