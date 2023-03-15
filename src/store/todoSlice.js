import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  taskList: [
    {
      id: 1,
      text: "Приготовить ужин",
      completed: false,
    },
    {
      id: 2,
      text: "Полить цветы",
      completed: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;
