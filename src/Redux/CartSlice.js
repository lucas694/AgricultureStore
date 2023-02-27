import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
      const { id, quantity } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
        console.log(quantity)
      } else {
        state.push(action.payload);
      }
    },
    removeItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCart(state) {
      state = [];
    },
    totalInTheCart(state) {
      let total = 0;
      state.forEach(item => {
        total += item.price;
      });
      return total;
    }

  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => {
  console.log(state)
  return state.cart;

}