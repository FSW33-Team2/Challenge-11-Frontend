import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../../components/lib/axios'

axios.defaults.withCredentials = true

const initialState = {
  data: [],
  loading: false,
}
export const fetchUserToken = createAsyncThunk('getUserToken', async () => {
  const response = await axios.get(`/api/auth/token`)
  return response.data.accessToken
})

const UserTokenSlice = createSlice({
  name: 'userToken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserToken.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUserToken.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchUserToken.rejected, (state) => {
        state.data = []
        state.loading = false
      })
  },
})

export default UserTokenSlice.reducer
