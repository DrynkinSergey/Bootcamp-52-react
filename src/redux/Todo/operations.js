import axios from 'axios'
import {
	addTodo,
	fetchTodos,
	fetching,
	error,
	success,
	deleteTodo,
} from './todoSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://644b9af24bdbc0cc3a95949b.mockapi.io/'

export const fetchTodosThunk = createAsyncThunk(
	'todos/fetchTodos/l',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get('/todos')
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const addTodoThunk = createAsyncThunk(
	'todos/addTodo',
	async (title, thunkAPI) => {
		try {
			const res = await axios.post('/todos', { title, completed: false })
			thunkAPI.dispatch({ type: 'HELLO' })
			console.log(thunkAPI.getState())
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
export const deleteTodoThunk = createAsyncThunk(
	'todos/deleteTodo',
	async (id, thunkAPI) => {
		try {
			await axios.delete(`/todos/${id}`)
			return id
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	},
	{
		condition: (_, thunkAPI) => {
			const loading = thunkAPI.getState().todoList.loading
			if (loading) {
				return false
			}
		},
	}
)

// export const fetchTodosThunk = () => async dispatch => {
// 	try {
// 		dispatch(fetching())
// 		const res = await axios.get('/todos')
// 		dispatch(fetchTodos(res.data))
// 		dispatch(success())
// 	} catch (e) {
// 		dispatch(error(e.message))
// 	}
// }
// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		await axios.delete(`/todos/${id}`)
// 		dispatch(deleteTodo(id))
// 	} catch (e) {
// 		dispatch(error(e.message))
// 	}
// }

// export const addTodoThunk = title => async dispatch => {
// 	try {
// 		const res = await axios.post('/todos', { title, completed: false })
// 		dispatch(addTodo(res.data))
// 		// dispatch(fetchTodosThunk())
// 	} catch (error) {
// 		console.log(error.message)
// 	}
// }
