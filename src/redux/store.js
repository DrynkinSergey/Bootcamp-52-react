import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
})
