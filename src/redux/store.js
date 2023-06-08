import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './Todo/filterSlice'
import { themeReducer } from './themeSlice'
import { todosApi } from './todosApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
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
	middleware: getDafualtMiddleware =>
		getDafualtMiddleware().concat(todosApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})

// Додається для рефетча
setupListeners(store.dispatch)
