import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      // state.products.length = 0
      // state.products.push(...);
      const data = state.products.filter((p) => p._id !== action.payload._id);

      state.products = data;
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
