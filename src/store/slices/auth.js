import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params) => {
    const { data } = await axios.post("/login", params);
    return data;
  }
);

const initialState = {
  status: "idle",
  data: {},
  error: null,
};

const authSlice = createSlice({
  name: "@@auth",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = "received";
      state.error = null;
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error || action.meta.error;
    },
  },
});

export const authReducer = authSlice.reducer;
