import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import productService from './productService';

const initialState = {
	products: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const getProducts = createAsyncThunk(
	'products/get',
	async (config: string[], thunkAPI) => {
		try {
			return await productService.getProducts(config);
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
