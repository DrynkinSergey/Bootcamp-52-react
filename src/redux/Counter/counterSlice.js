import { createSlice } from '@reduxjs/toolkit'
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
})
export const { counterIncrement, decrement } = countSlice.actions
export const countReducer = countSlice.reducer
