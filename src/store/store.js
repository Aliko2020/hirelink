import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlice";
import applicationReducer from "./applicationSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    application: applicationReducer,
  },
});
