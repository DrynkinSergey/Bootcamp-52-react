import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import { filterReducer } from './Todo/filterSlice'
import { themeReducer } from './themeSlice'
import { todosApi } from './todosApi'

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		theme: themeReducer,
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: getDafualtMiddleware =>
		getDafualtMiddleware().concat(todosApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})
