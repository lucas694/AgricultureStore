import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCart(state) {
      state = [];
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;