
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    completedCount: 0,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleComplete: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        state.completedCount += todo.completed ? 1 : -1;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.completedCount -= state.items[index].completed ? 1 : 0;
        state.items.splice(index, 1);
      }
    }
  }
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
