import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  user: {},
  error: null,
};

const authSlice = createSlice({
  name: "@@auth",
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
