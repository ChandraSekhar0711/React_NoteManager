import {configureStore} from "@reduxjs/toolkit";
import { noteReducer } from "./notes/note-slice";
export const store = configureStore({
  reducer : {
      noteSlice : noteReducer
  },
})