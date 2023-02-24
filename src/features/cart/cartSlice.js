import { createSlice } from "@reduxjs/toolkit";

import cartItem from "../../cartItems";

const initialState = {
  cartItems: cartItem,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

// console.log(cartSlice);

export default cartSlice.reducer;
