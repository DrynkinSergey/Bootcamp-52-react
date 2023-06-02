import { createReducer } from '@reduxjs/toolkit'
import { decrement, increment } from './actions'

const initialState = {
	count: 0,
	step: 1,
}

export const countReducer = createReducer(initialState, {
	[increment]: (state, action) => {
		console.log(action)
		state.count += action.payload
	},
	[decrement]: (state, action) => {
		console.log(action)
		state.count -= action.payload
	},
})
// export const countReducer = (state = initialState, action) => {
// 	const { type, payload } = action
// 	switch (type) {
// 		case increment.type:
// 			return {
// 				...state,
// 				count: state.count + payload,
// 			}

// 		case decrement.type:
// 			return {
// 				...state,
// 				count: state.count - payload,
// 			}
// 		default:
// 			return state
// 	}
// }
