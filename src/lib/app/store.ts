import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from 'lib/features/products/productSlice';
import authenticationReducer from 'lib/features/authentication/authenticationSlice';
import userReducer from 'lib/features/user/userSlice';

const reducers = combineReducers({
	productReducer,
	authenticationReducer,
	userReducer,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
