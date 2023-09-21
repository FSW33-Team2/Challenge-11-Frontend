import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  btnState: '',
};

export const DynamicButtonSlice = createSlice({
  name: 'Dynamic Button',
  initialState,
  reducers: {
    clickButton: (state, action) => {
      state.btnState = action.payload.btnState;
    },
  },
});

export const { clickButton } = DynamicButtonSlice.actions;

export default DynamicButtonSlice.reducer;
