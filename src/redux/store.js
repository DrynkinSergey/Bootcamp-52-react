// import { combineReducers, createStore } from 'redux'
import { countReducer } from './Counter/reducer'
// import { devToolsEnhancer } from '@redux-devtools/extension'
import { todoReducer } from './Todo/reducer'
import { configureStore } from '@reduxjs/toolkit'
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
	},
	devTools: true,
})
