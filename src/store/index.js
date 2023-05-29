import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./notes/note-slice";
import { authReducer } from "./auth/auth-slice";
export const store = configureStore({
  reducer: {
    noteSlice: noteReducer,
    authSlice: authReducer,
  },
});
