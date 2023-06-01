import { DECREMENT, INCREMENT } from './constants'

const initialState = {
	count: 0,
	step: 1,
}
export const countReducer = (state = initialState, action) => {
	const { type, payload } = action
	console.log(action)
	switch (type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + payload,
			}

		case DECREMENT:
			return {
				...state,
				count: state.count - payload,
			}
		default:
			return state
	}
}
