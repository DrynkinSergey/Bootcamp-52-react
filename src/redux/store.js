// import { combineReducers, createStore } from 'redux'
import { countReducer } from './Counter/counterSlice'
// import { devToolsEnhancer } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './Todo/todoSlice'
import { filterReducer } from './filterSlice'
// const enhancer = devToolsEnhancer()

// const rootReducer = combineReducers({
// 	counter: countReducer,
// 	tasks: todoReducer,
// })
// export const store = createStore(rootReducer, enhancer)
export const store = configureStore({
	reducer: {
		counter: countReducer,
		tasks: todoReducer,
		filter: filterReducer,
	},
})
