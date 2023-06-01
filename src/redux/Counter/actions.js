import { DECREMENT, INCREMENT } from './constants'

export const incrementAC = value => ({ type: INCREMENT, payload: value })
export const decrementAC = (value = 1) => ({ type: DECREMENT, payload: value })
