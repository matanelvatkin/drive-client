import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const rootDirectory = "My_Storage";
const initialState = {
  path: [],
  currentDirectory: {
    name: rootDirectory,
    data: [],
  },
  isLoading: true,
  searchValue: "",
};

export const openDirectory = createAsyncThunk(
  "document/openDirectory",
  async (payload = rootDirectory, { dispatch, getState, rejectWithValue }) => {
    try {
      dispatch(documentSlice.actions.addDirectoryToPath(payload));
      const path = getState().document.path.join("/");
      const result = await axios.get("http://localhost:5555/");
      console.log(result);
      return result.data;
    } catch (e) {
      rejectWithValue(e.code || e.status);
    }
  }
);
const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    pathNavigation: (state, { payload }) => {
      state.path = [...state.path].slice(0, payload + 1);
    },
    addDirectoryToPath: (state, { payload }) => {
      state.path = [...state.path, payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(openDirectory.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(openDirectory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentDirectory = payload;
      })
      .addCase(openDirectory.rejected, (state, error) => {
        state.isLoading = false;
        alert(error)
        state.path=state.path.slice(0, state.path.length - 1)
      });
  },
});

export const { pathNavigation } = documentSlice.actions;

export default documentSlice.reducer;
