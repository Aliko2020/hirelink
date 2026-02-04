import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  experience: "",
  skills: "",
  portfolio: "",
  resume: null,
  currentStep: 1,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    nextStep: (state) => {
      if (state.currentStep < 3) state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep > 1) state.currentStep -= 1;
    },
    resetForm: () => initialState,
  },
});

export const { setField, nextStep, prevStep, resetForm } = applicationSlice.actions;
export default applicationSlice.reducer;