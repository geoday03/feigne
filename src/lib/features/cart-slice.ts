import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "lib/app/store";
import CartState from "lib/types/cart-state";

const initialState: CartState = {
  items: [],
  total: 0,
};

export const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    append: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
    },
  },
});

export default UISlice.reducer;
