import { createSlice } from "@reduxjs/toolkit";
import { jobs as initialJobs } from "../data/jobs";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: initialJobs,
  },
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    
  },
});

export const { addJob } = jobsSlice.actions;
export default jobsSlice.reducer;
