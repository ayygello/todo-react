import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const thursdaySlice = createSlice({
  name: 'thursday',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        { id: nanoid(), name: action.payload, completed: false },
      ];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index].completed = !state[index].completed;
      return state;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = thursdaySlice.actions;

export default thursdaySlice.reducer;
