import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './Todo/filterSlice'
import { themeReducer } from './themeSlice'

import { authReducer } from './Auth/authSlice'
import { todoReducer } from './Todo/todoSlice'
// 'https://goit-task-manager.herokuapp.com/'
export const store = configureStore({
	reducer: {
		filter: filterReducer,
		theme: themeReducer,
		// [todosApi.reducerPath]: todosApi.reducer,
		todoList: todoReducer,
		auth: authReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
