import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import { Product } from 'lib/types/product';
import { GetProductsConfig } from 'lib/types/ProductRequestConfig';
import productService from './productService';

interface ProductState {
	products: Product[];
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: string;
}

const initialState: ProductState = {
	products: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const getProducts = createAsyncThunk(
	'products/get',
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
	},
);

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProducts.fulfilled, (state, action: AnyAction) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.products = action.payload;
			});
	},
});

export default productSlice.reducer;
