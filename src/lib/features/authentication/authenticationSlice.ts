import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AuthenticationState,
  LoginAccountData,
  RegisterAccountData,
} from "../../types/auth";
import authenticationService from "./authenticationService";
import type { RootState } from "../../app/store";

var account;
if (typeof window !== "undefined") {
  // Perform localStorage action
  account = JSON.parse(localStorage.getItem("account") || "{}");
}

const initialState: AuthenticationState = {
  account: account,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk(
  "authentication/register",
  async (accountData: RegisterAccountData, thunkAPI) => {
    try {
      return await authenticationService.register(accountData);
    } catch (err: any) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData: LoginAccountData, thunkAPI) => {
    try {
      return await authenticationService.login(userData);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authenticationService.logout();
});

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(register.fulfilled, (state, action: AnyAction) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.account = action.payload;
      })

      .addCase(register.rejected, (state, action: AnyAction) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(login.fulfilled, (state, action: AnyAction) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.account = action.payload;
      })

      .addCase(login.rejected, (state, action: AnyAction) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.account = state.account || "{}";
      });
  },
});

export const selectUser = (state: AuthenticationState) => state.account;

export default authenticationSlice.reducer;
