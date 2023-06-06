import { createSlice, nanoid } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodosThunk } from './operations'

const initialState = {
	todos: [],
	counter: 1,
	error: '',
	loading: false,
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setCounter: (state, action) => {
			state.counter = state.counter + 2
		},
	},
	extraReducers: builder => {
		builder
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
