import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todos: [],
	filterStr: '',
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
})

export const { deleteTodo, toggleTodo, setFilter, setData } = todoSlice.actions

export const todoReducer = todoSlice.reducer
