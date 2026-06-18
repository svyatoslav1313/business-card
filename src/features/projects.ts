import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProjectType } from "../types/Project";
import projectsFromJson from '../data/projects.json';

type ProjectsState = {
  list: ProjectType[];
}

const initialState: ProjectsState = {
  list: projectsFromJson,
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Omit<ProjectType, 'id'>>) => {
      const newProject: ProjectType = {
        id: state.list.length + 1,
        isNew: true,
        ...action.payload,
      }

      state.list.push(newProject);
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(project => project.id !== action.payload);
    },
  }
});

export const { addProject, removeProject } = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;