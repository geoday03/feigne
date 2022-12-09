import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
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
      const a = Object.assign({ id: nanoid() }, action.payload);
      state.items.push(a);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      state.items.map((item, index) => {
        if (item.id == action.payload.id) {
          state.items[index].quantity = action.payload.quantity;
        }
      });
    },
  },
});

export default CartSlice.reducer;
