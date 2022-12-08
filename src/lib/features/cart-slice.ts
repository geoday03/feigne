import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, store } from "lib/app/store";
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
    remove: (state, action: PayloadAction<string>) => {
      state.items.filter((item, index) => {
        if (item.id == action.payload) {
          state.items.splice(index, 1);
        }
      });
    },
  },
});

export default CartSlice.reducer;
