import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TodoState } from '../../util/TodoState'

const initialState: TodoState[] = []

export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      state.push({
        text: action.payload,
        completed: false,
        id: Math.round(Math.random() * 10000),
      })
    },
    deleteItem: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id)
    },
    toggleItem: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    editItem: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.textEdit
      }
      console.log(state)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, toggleItem, editItem } = todoSlice.actions

export default todoSlice.reducer
