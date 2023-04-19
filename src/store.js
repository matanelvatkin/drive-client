import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import documentReducer from './features/document/documentSlice';

export const store = configureStore({
  reducer: {
    document: documentReducer,
    user: userReducer
  },
});
  