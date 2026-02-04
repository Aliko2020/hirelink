import { createSlice } from "@reduxjs/toolkit";

const loadCandidates = () => {
  try {
    const data = localStorage.getItem("candidates");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.error("Invalid candidates data in localStorage", err);
    return [];
  }
};

const initialState = {
  candidates: loadCandidates(),
};

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    addCandidate: (state, action) => {
      state.candidates.push(action.payload);
      localStorage.setItem(
        "candidates",
        JSON.stringify(state.candidates)
      );
    },

    updateCandidate: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.candidates.findIndex((c) => c.id === id);
      if (index !== -1) {
        state.candidates[index] = {
          ...state.candidates[index],
          ...updates,
        };
        localStorage.setItem(
          "candidates",
          JSON.stringify(state.candidates)
        );
      }
    },

    moveStage: (state, action) => {
      const { id, stage } = action.payload;
      const candidate = state.candidates.find((c) => c.id === id);
      if (candidate) {
        candidate.stage = stage;
        localStorage.setItem(
          "candidates",
          JSON.stringify(state.candidates)
        );
      }
    },
  },
});

export const { addCandidate, updateCandidate, moveStage } =
  candidatesSlice.actions;

export default candidatesSlice.reducer;
