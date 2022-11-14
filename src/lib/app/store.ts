import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "lib/features/authentication/authenticationSlice";
import userReducer from "lib/features/user/userSlice";

const reducers = combineReducers({
  authenticationReducer,
  userReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
