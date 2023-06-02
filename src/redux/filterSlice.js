import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: 'All',
	reducers: {
		setFilter: (state, action) => (state = action.payload),
	},
})
export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer
