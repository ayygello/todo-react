import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const sundaySlice = createSlice({
  name: 'sunday',
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

export const { addTodo, removeTodo, toggleTodo } = sundaySlice.actions;

export default sundaySlice.reducer;
