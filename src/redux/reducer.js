import { configureStore, createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      state = action.payload;
    },
    logout(state, action) {
      state = {};
    },
  },
});
const dirReducer = createSlice({
  name: "directory",
  initialState: { root: "d", documents: [] },
  reducers: {
    openDir: (state, action) => {
      state = {
        root: action.payload.root,
        documents: action.payload.documents,
      };
      return state;
    },
  },
});
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
const newDocSlice = createSlice({
  name: "document",
  initialState: false,
  reducers: {
    openOption: (state) => !state,
  },
});
const searchOpenSlice = createSlice({
  name: "searchOpen",
  initialState: false,
  reducers: {
    searchOpenReducer: (state) => !state,
  },
});

export const { login, logout } = userReducer.actions;
export const { openDir } = dirReducer.actions;
export const { increment, decrement } = counterSlice.actions;
export const { openOption } = newDocSlice.actions;
export const { searchOpenReducer } = searchOpenSlice.actions;
const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    directory: dirReducer.reducer,
    counter: counterSlice.reducer,
    document: newDocSlice.reducer,
    searchOpen: searchOpenSlice.reducer,
  },
});

export default store;
