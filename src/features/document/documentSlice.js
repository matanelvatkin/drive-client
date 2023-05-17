import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiCalls from "../../functions/apiCalls";

const rootDirectory = { name: "My_Storage", type: "directory" };
const initialState = {
  path: [],
  currentDirectory: {
    name: rootDirectory,
    data: [],
    id: "",
  },
  isLoading: true,
  searchValue: "",
};

export const openDirectory = createAsyncThunk(
  "document/openDirectory",
  async (
    payload = { name: rootDirectory },
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      dispatch(documentSlice.actions.updateID(payload._id));
      dispatch(
        documentSlice.actions.addDirectoryToPath([payload.name, payload._id])
      );
      const result = await apiCalls(
        "get",
        "document/getchildren",
        {},
        { dirId: getState().document.currentDirectory.id }
      );
      return result;
    } catch (e) {
      rejectWithValue(e.code || e.status);
    }
  }
);
export const getBackDirectory = createAsyncThunk(
  "document/getBackDirectory",
  async (
    payload = { name: rootDirectory },
    { dispatch, getState, rejectWithValue }
  ) => {
    try {
      dispatch(documentSlice.actions.updateID(payload.directory[1]));
      dispatch(documentSlice.actions.pathNavigation(payload.index));
      const result = await apiCalls(
        "get",
        "document/getchildren",
        {},
        { dirId: getState().document.currentDirectory.id }
      );
      return result;
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
    updateID: (state, { payload }) => {
      state.currentDirectory.id = payload;
    },
    updateChildren: (state, { payload }) => {
      state.currentDirectory.data = payload.filter(child => child.isActive);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(openDirectory.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(openDirectory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentDirectory.data = payload.filter(directory => directory.isActive);
      })
      .addCase(openDirectory.rejected, (state, error) => {
        state.isLoading = false;
        alert(error);
        if (state.path.length > 1) {
          state.path = state.path.slice(0, state.path.length - 1);
        }
      })
      .addCase(getBackDirectory.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getBackDirectory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentDirectory.data = payload;
      })
      .addCase(getBackDirectory.rejected, (state, error) => {
        state.isLoading = false;
        alert(error);
        if (state.path.length > 1) {
          state.path = state.path.slice(0, state.path.length - 1);
        }
      });
  },
});

export const { pathNavigation, addDirectoryToPath, updateID ,updateChildren} =
  documentSlice.actions;

export default documentSlice.reducer;
