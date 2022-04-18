import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import filterReducer from '../features/todo/filterSlice'
const reducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
})

export const store = configureStore({
  reducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
