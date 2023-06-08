import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../config/apiConfig'

export const fetchTodosThunk = createAsyncThunk(
	'todos/fetchTodos/l',
	async (_, thunkAPI) => {
		try {
			const res = await instance.get('/tasks')
			return res.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const addTodoThunk = createAsyncThunk(
	'todos/addTodo',
	async (text, thunkAPI) => {
		try {
			const res = await instance.post('/tasks', { text })
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
			await instance.delete(`/tasks/${id}`)
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
