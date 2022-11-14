import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "lib/types/User";
import type { RootState } from "../../app/store";
import type { Product } from "lib/types/Product";

const initialState: UserState = {
  cart: [],
  addresses: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Product[]>) => {
      state.cart = action.payload;
    },
    appendCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ title: string; quantity: number }>
    ) => {
      state.cart.map((product, i) => {
        if (product.title == action.payload.title) {
          product.quantity = action.payload.quantity;
        }
      });
    },
    removeItemsFromCart: (state, action: PayloadAction<Product[]>) => {
      action.payload.map((product, i) => {
        if (state.cart[i].title == product.title) {
          state.cart.splice(i, 1);
        }
      });
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setCart,
  appendCart,
  updateCartItemQuantity,
  removeItemsFromCart,
  clearCart,
} = userSlice.actions;

export const selectCart = (state: UserState) => state.cart;

export default userSlice.reducer;
