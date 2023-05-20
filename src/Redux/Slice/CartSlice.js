import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, payload) => {
      console.log("payload.payload", payload.payload)
      return [...state, payload.payload];
    },
    removeCart: (state, payload) => {
      return state.filter(p => p.id !== payload.payload);
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;