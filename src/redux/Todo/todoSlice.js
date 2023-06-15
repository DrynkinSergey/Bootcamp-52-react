import { createSlice, isAnyOf, nanoid } from '@reduxjs/toolkit'
import {
	addTodoThunk,
	deleteTodoThunk,
	editTodoThunk,
	fetchTodosThunk,
	toggleTodoThunk,
} from './operations'
import { logoutThunk } from '../Auth/operations'

const initialState = {
	todos: [],
	error: '',
	loading: false,
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,

	extraReducers: builder => {
		builder
			.addCase(logoutThunk.fulfilled, (state, action) => {
				state.todos = []
			})
			.addCase(fetchTodosThunk.fulfilled, (state, action) => {
				state.todos = action.payload
			})
			.addCase(addTodoThunk.fulfilled, (state, action) => {
				state.todos.push(action.payload)
			})

			.addCase(deleteTodoThunk.fulfilled, (state, action) => {
				const index = state.todos.findIndex(item => item.id === action.payload)
				state.todos.splice(index, 1)
			})

			.addMatcher(
				isAnyOf(toggleTodoThunk.fulfilled, editTodoThunk.fulfilled),
				(state, { payload }) => {
					const index = state.todos.findIndex(todo => todo.id === payload.id)
					state.todos.splice(index, 1, payload)
				}
			)

			.addMatcher(
				action => action.type.endsWith('/fulfilled'),
				(state, action) => {
					state.loading = false
				}
			)
			.addMatcher(
				action => action.type.endsWith('/pending'),
				(state, action) => {
					state.loading = true
					state.error = ''
				}
			)
			.addMatcher(
				action => action.type.endsWith('/rejected'),
				(state, action) => {
					state.error = action.payload
					state.loading = false
				}
			)
	},
})

export const { setCounter } = todoSlice.actions
export const todoReducer = todoSlice.reducer
