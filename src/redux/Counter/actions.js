import { createAction } from '@reduxjs/toolkit'

// export const incrementAC = value => {
// 	return { type: INCREMENT, payload: value }
// }
// export const decrementAC = (value = 1) => ({ type: DECREMENT, payload: value })

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')

console.log(increment())
console.log(increment(12))
console.log(increment({ id: 1, title: 'hello' }))
