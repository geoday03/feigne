import {
  Action,
  AnyAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { GetProductsConfig } from "lib/types/ProductRequestConfig";
import { productService } from "./product-service";

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: string, thunkAPI) => {
    try {
      return productService.getProduct(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (config: GetProductsConfig, thunkAPI) => {
    try {
      return productService.getProducts(config);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getProduct.fulfilled, (action: AnyAction) => {
      return action.payload;
    });

    builder.addCase(getProducts.fulfilled, (action: AnyAction) => {
      return action.payload;
    });
  },
});

export default productSlice.reducer;
