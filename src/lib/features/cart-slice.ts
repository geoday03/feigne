import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "lib/app/store";
import { CartItemConfig } from "lib/types/cart-item-config";
import CartState from "lib/types/cart-state";

const initialState: CartState = {
  items: [],
  total: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    append: (state, action: PayloadAction<CartItemConfig>) => {
      state.items.push(action.payload);
    },
  },
});

export default CartSlice.reducer;
