import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (params) => {
    const { data } = await axios.post("/login", params);
    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/register", params);
    return data;
  }
);

export const fetchAuth = createAsyncThunk("auth/fetchAuth", async () => {
  const { data } = await axios.get("/auth");
  return data;
});

const initialState = {
  status: "idle",
  data: null,
  error: null,
};

const authSlice = createSlice({
  name: "@@auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "received";
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error || action.meta.error;
      })
      .addCase(fetchAuth.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = "received";
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error || action.meta.error;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = "received";
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error || action.meta.error;
      });
  },
});

export const isAuthSelector = (state) => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
