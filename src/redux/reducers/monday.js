import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: nanoid(),
    name: 'Сделать TODO',
    completed: true,
  },
  {
    id: nanoid(),
    name: 'Покормить кота',
    completed: false,
  },
];

export const mondaySlice = createSlice({
  name: 'monday',
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

export const { addTodo, removeTodo, toggleTodo } = mondaySlice.actions;

export default mondaySlice.reducer;
