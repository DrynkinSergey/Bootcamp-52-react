// import { createSlice } from '@reduxjs/toolkit'

// export const countReducer = createReducer(initialState, builder => {
// 	builder.addCase(increment, (state, action) => {
// 		state.count += action.payload
// 	})
// 	builder.addCase(decrement, (state, action) => {
// 		state.count -= action.payload
// 	})
// })
// export const countReducer = createReducer(initialState, {
// 	[increment]: (state, action) => {
// 		state.count += action.payload
// 	},
// 	[decrement]: (state, action) => {
// 		state.count -= action.payload
// 	},
// })
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
