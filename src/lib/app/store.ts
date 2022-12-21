import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "lib/features/cart-slice";
import productSlice from "lib/features/product-slice";

const reducers = combineReducers({ cartSlice, productSlice });

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
