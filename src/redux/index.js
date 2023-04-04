import { configureStore } from "@reduxjs/toolkit";
import { tasks, addTask, setTasks } from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasks,
  },
});

export { tasks, addTask, setTasks };
