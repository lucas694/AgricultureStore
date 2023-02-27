import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './CartSlice';

const rootReducer = combineReducers({
  cart: cartSlice
});

export default configureStore({
  reducer: rootReducer,
});