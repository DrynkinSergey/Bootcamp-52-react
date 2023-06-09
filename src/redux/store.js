import { configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterReducer } from './Todo/filterSlice'
import { themeReducer } from './themeSlice'

import { authReducer } from './Auth/authSlice'
import { todoReducer } from './Todo/todoSlice'
// 'https://goit-task-manager.herokuapp.com/'

const authConfig = {
	key: 'token',
	version: 1,
	whitelist: ['token'],
	storage,
}

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		theme: themeReducer,
		// [todosApi.reducerPath]: todosApi.reducer,
		todoList: todoReducer,
		auth: persistReducer(authConfig, authReducer),
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)
