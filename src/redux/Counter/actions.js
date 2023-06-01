import { DECREMENT, INCREMENT } from './constants'

export const incrementAC = value => {
	return { type: INCREMENT, payload: value }
}
export const decrementAC = (value = 1) => ({ type: DECREMENT, payload: value })
