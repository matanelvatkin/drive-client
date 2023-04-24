import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiCalls from "../../functions/apiCalls";
const initialState = {
  fullName: "",
  email: "",
  password: "",
  my_storage: {},
  isLoading: false,
};
export const login = createAsyncThunk(
  "user/login",
  async (
    payload = { fullName: "", email: "", password: "", my_storge: {} },
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      dispatch(userSlice.actions.user(payload));
      const user = await apiCalls("post", "user/login", getState().user);
      return user;
    } catch (e) {
      rejectWithValue(e.code || e.status);
    }
  }
);
export const register = createAsyncThunk(
  "user/register",
  async (
    payload = { fullName: "", email: "", password: "", my_storge: {} },
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      dispatch(userSlice.actions.user(payload));
      const user = await apiCalls("post", "user/register", getState().user);
      return user;
    } catch (e) {
      rejectWithValue(e.code || e.status);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state = {...state,...payload};
      return state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, { payload }) => {
        state.isLoading=true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state = {...state,isLoading:false,...payload.user}
        localStorage.setItem("token", payload.token);
        return state
      })
      .addCase(login.rejected, (state, error) => {
        state.isLoading = false;
        alert(error);
        state = {
          fullName: "",
          email: "",
          password: "",
          my_storage: {},
          isLoading: false,
        };
      })
      .addCase(register.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, error) => {
        state.isLoading = false;
        alert(error);
        state = {
          fullName: "",
          email: "",
          password: "",
          my_storage: {},
          isLoading: false,
        };
      });
  },
});

export const { user } = userSlice.actions;

export default userSlice.reducer;
