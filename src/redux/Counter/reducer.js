import { DECREMENT, INCREMENT } from './constants'

const initialState = {
	counter: 0,
	step: 1,
}
export const countReducer = (state = initialState, action) => {
	const { type, payload } = action
	console.log(action)
	switch (type) {
		case INCREMENT:
			return {
				...state,
				counter: state.counter + payload,
			}

		case DECREMENT:
			return {
				...state,
				counter: state.counter - payload,
			}
		default:
			return state
	}
}
