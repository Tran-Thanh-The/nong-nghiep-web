import { configureStore } from '@reduxjs/toolkit';
import appReducer from './Slice/AppSlice';
import cartReducer from './Slice/CartSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    carts: cartReducer,
  },
});

export default store;