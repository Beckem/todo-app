import { createSlice } from '@reduxjs/toolkit'

const initialState = 'all'
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    toggleFilters: (state, action) => {
      return action.payload
    },
  },
})

export const { toggleFilters } = filterSlice.actions

export default filterSlice.reducer
