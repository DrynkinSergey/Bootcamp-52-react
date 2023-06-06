import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
})
