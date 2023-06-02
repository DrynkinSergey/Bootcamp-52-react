import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: [],
	},
	reducers: {
		addTodo: (state, { payload }) => {
			state.todos.push(payload)
		},
		toggleTodo: (state, { payload }) => {
			const todo = state.todos.find(todo => todo.id === payload)
			todo.completed = !todo.completed
		},
		deleteTodo: (state, { payload }) => {
			const todoIndex = state.todos.findIndex(todo => todo.id === payload)
			state.todos.splice(todoIndex, 1)
		},
	},
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
