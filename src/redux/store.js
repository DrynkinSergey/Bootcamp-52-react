import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import logger from 'redux-logger'

// const myLogger = store => next => action => {
// 	console.log(action)
// 	if (action.payload.title === 'angular' || action.payload.title === 'vue') {
// 		console.log(action)
// 		action.payload = { ...action.payload, title: 'react' }
// 	}
// 	next(action)
// }

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
})
