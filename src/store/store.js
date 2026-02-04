import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./applicationSlice"; 
import candidatesReducer from "./candidatesSlice";  

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    candidates: candidatesReducer,
  },
});
