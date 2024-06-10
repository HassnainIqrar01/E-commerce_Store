import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { username, product } = action.payload;
      if (!state[username]) {
        state[username] = { cartItems: [], orders: [] };
      }
      state[username].cartItems.push(product);
    },
    removeFromCart: (state, action) => {
      const { username, productId } = action.payload;
      if (state[username]) {
        state[username].cartItems = state[username].cartItems.filter(item => item.id !== productId);
      }
    },
    placeOrder: (state, action) => {
      const { username } = action.payload;
      if (state[username]) {
        state[username].orders = [...state[username].cartItems];
        state[username].cartItems = [];
      }
    },
  },
});

export const { addToCart, removeFromCart, placeOrder } = cartSlice.actions;

export default cartSlice.reducer;
