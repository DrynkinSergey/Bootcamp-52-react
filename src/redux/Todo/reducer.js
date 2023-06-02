// import { createReducer } from '@reduxjs/toolkit'
// import { addTodo, deleteTodo, setFilter, toggleTodo } from './actions'

// const initialState = {
// 	todos: [],
// 	filter: 'All',
// }

// //With builder
// export const todoReducer = createReducer(initialState, builder => {
// 	builder.addCase(addTodo, (state, { payload }) => {
// 		state.todos.push(payload)
// 	})
// 	builder.addCase(deleteTodo, (state, { payload }) => {
// 		const todoIndex = state.todos.findIndex(todo => todo.id === payload)
// 		state.todos.splice(todoIndex, 1)
// 	})
// 	builder.addCase(toggleTodo, (state, { payload }) => {
// 		const todo = state.todos.find(todo => todo.id === payload)
// 		todo.completed = !todo.completed
// 	})
// 	builder.addCase(setFilter, (state, { payload }) => {
// 		state.filter = payload
// 	})
// })
//Without builder
// export const todoReducer = createReducer(initialState, {
// 	[addTodo]: (state, { payload }) => {
// 		state.todos.push(payload)
// 	},
// 	[deleteTodo]: (state, { payload }) => {
// 		const todoIndex = state.todos.findIndex(todo => todo.id === payload)
// 		state.todos.splice(todoIndex, 1)
// 	},
// 	[toggleTodo]: (state, { payload }) => {
// 		const todo = state.todos.find(todo => todo.id === payload)
// 		todo.completed = !todo.completed
// 	},
// 	[setFilter]: (state, { payload }) => {
// 		state.filter = payload
// 	},
// })
// export const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case addTodo.type: {
// 			return {
// 				...state,
// 				todos: [...state.todos, action.payload],
// 			}
// 		}
// 		case deleteTodo.type: {
// 			return {
// 				...state,
// 				todos: state.todos.filter(todo => todo.id !== action.payload),
// 			}
// 		}
// 		case toggleTodo.type: {
// 			return {
// 				...state,
// 				todos: state.todos.map(todo =>
// 					todo.id === action.payload
// 						? { ...todo, completed: !todo.completed }
// 						: todo
// 				),
// 			}
// 		}
// 		case setFilter.type: {
// 			return {
// 				...state,
// 				filter: action.payload,
// 			}
// 		}
// 		default:
// 			return state
// 	}
// }
