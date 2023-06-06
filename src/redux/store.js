import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import { filterReducer } from './Todo/filterSlice'
import { themeReducer } from './themeSlice'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		filter: filterReducer,
		theme: themeReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',
})
