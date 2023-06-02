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

import { countReducer } from './Counter/counterSlice'
import { todoReducer } from './Todo/todoSlice'
import { filterReducer } from './filterSlice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
}
const persistedReducer = persistReducer(persistConfig, todoReducer)
export const store = configureStore({
	reducer: {
		counter: countReducer,
		tasks: persistedReducer,
		filter: filterReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
