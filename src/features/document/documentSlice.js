import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rootDirectory = "My_Storage"
const initialState = {
  path: [rootDirectory, "hello", "dael", "manatnel", "cat", "dog"],
  currentDirectory: {
    name: rootDirectory,
    data: [{type:"file",name:"12"},{type:"directory",name:"15"},{type:"directory",name:"14"},{type:"file",name:"13"}]
  },
  isLoading: true,
  searchValue: ""
};


const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setPath: (state, { payload }) => {
      state.path = [...state.path].slice(0, payload + 1);
    }
  }
});
  
  
  
  
export const { setPath } =
documentSlice.actions;

export default documentSlice.reducer;
