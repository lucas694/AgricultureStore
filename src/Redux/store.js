import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const initialState = {
  cart: [],
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: initialState,
});

export default store;