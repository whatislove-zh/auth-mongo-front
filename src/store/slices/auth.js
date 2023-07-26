import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuth = createAsyncThunk(
  "auth/fetchUserData",
  async (params) => {
    const { data } = await axios.post("/login", params);
    return data;
  }
);

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const authSlice = createSlice({
  name: "@@auth",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "received";
      state.error = null;
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.error || action.meta.error;
    },
  },
});

export const isAuthSelector = (state) => Boolean(state.auth.data)
export const authReducer = authSlice.reducer;
