import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setTasks(state, action) {
      return action.payload;
    },
  },
});

export const tasks = taskSlice.reducer;
export const { addTask, setTasks } = taskSlice.actions;
