import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      return { ...state, isLoggedIn: true };
    },
    logout(state) {
      return { ...state, isLoggedIn: false };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
