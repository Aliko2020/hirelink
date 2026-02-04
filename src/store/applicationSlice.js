import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobId: null,
  jobTitle: "",
  jobDescription: "",
  fullName: "",
  email: "",
  phone: "",
  experience: "",
  skills: "",
  portfolio: "",
  resume: null,
  currentStep: 0,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      Object.assign(state, action.payload);
    },
    nextStep: (state) => {
      if (state.currentStep < 2) state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep > 0) state.currentStep -= 1;
    },
    resetForm: () => initialState,
    setJob: (state, action) => {
      state.jobId = action.payload.id;
      state.jobTitle = action.payload.title;
      state.jobDescription = action.payload.description;
    },
  },
});

export const { updateForm, nextStep, prevStep, resetForm, setJob } =
  applicationSlice.actions;

export default applicationSlice.reducer;
