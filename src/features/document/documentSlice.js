import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  shiftsConnection: null,
  shiftsForTrade: {},
  isLoading: true
};


const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setvvv: (state, { payload }) => {
      // ...
    }
  }
});
  
  
  
  
export const { setvvv } =
documentSlice.actions;

export default documentSlice.reducer;
