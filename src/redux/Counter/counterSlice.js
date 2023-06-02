import { createSlice } from '@reduxjs/toolkit'
import { setFilter } from '../filterSlice'
const initialState = {
	count: 0,
	step: 1,
}
const countSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		counterIncrement: (state, action) => {
			state.count += action.payload
		},
		decrement: (state, action) => {
			state.count -= action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(setFilter, (state, action) => {
			state.count = 0
		})
	},
})
export const { counterIncrement, decrement } = countSlice.actions
export const countReducer = countSlice.reducer
