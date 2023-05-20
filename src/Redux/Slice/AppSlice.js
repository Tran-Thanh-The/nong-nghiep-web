import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    text: "",
    caoThap: false,
    thapCao: false,
  },
  reducers: {
    changeText: (state, payload) => ({
      ...state,
      text: payload.payload
    }),
    toggleCaoThap: (state) => ({
      ...state,
      caoThap: !state.caoThap,
      thapCao: false,
    }),
    toggleThapCao: (state) => ({
      ...state,
      caoThap: false,
      thapCao: !state.thapCao,
    }),
  },
});

export const { changeText, toggleCaoThap, toggleThapCao } = appSlice.actions;
export default appSlice.reducer;