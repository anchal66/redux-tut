import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthentiated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthentiated = true;
    },
    logout(state) {
      state.isAuthentiated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
