import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },

    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      );
    },

    updateProject: (state, action) => {
      const index = state.projects.findIndex(
        (project) => project._id === action.payload._id
      );

      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
  },
});

export const {
  setProjects,
  addProject,
  deleteProject,
  updateProject,
} = projectSlice.actions;

export default projectSlice.reducer;