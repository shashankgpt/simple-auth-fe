import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./userAction";

export type AuthState = {
  loading: boolean;
  userInfo: any;
  error: string | null;
  success: boolean;
};

const initialState: AuthState = {
  loading: false,
  userInfo: {}, // for user object
  error: "",
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }: any) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload
      })
      .addCase(getUser.rejected, (state, { payload }: any) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;

export const { resetState } = authSlice.actions;
