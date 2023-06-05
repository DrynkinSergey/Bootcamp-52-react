import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
	todos: [],
	filterStr: '',
	error: '',
	loading: false,
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		fetching: (state, action) => {
			state.loading = true
		},
		error: (state, action) => {
			state.loading = false
			state.error = action.payload
		},
		success: (state, action) => {
			state.error = ''
			state.loading = false
		},
		addTodo: (state, action) => {
			state.todos.push(action.payload)
		},
		fetchTodos: (state, action) => {
			state.todos = action.payload
		},
		deleteTodo: (state, action) => {
			const index = state.todos.findIndex(item => item.id === action.payload)
			state.todos.splice(index, 1)
		},
	},
})

export const { addTodo, deleteTodo, fetchTodos, error, success, fetching } =
	todoSlice.actions
export const todoReducer = todoSlice.reducer
