import { combineReducers, createStore } from 'redux'
import { countReducer } from './Counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { todoReducer } from './Todo/reducer'
const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({
	counter: countReducer,
	tasks: todoReducer,
})
export const store = createStore(rootReducer, enhancer)
