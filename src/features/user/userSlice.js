import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  days: [],
  currentMonth: "",
  isLoading: true,
};



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setaaa: (state, { payload }) => {
      //...
    },
  }
});




export const { setaaa } =
userSlice.actions;

export default userSlice.reducer;
