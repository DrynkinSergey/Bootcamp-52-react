import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3002'

export const fetchAllPostsThunk = createAsyncThunk(
	'fetchAll',
	async (_, thunkApi) => {
		try {
			const { data } = await axios.get('/posts')
			return data
		} catch (error) {
			return thunkApi.rejectWithValue(error.message)
		}
	}
)
export const deletePostThunk = createAsyncThunk(
	'deletePost',
	async (id, { rejectWithValue, dispatch }) => {
		try {
			await axios.delete(`/posts/${id}`)
			dispatch(fetchAllPostsThunk())
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
export const addPostThunk = createAsyncThunk(
	'addPost',
	async (title, { rejectWithValue, dispatch }) => {
		try {
			await axios.post(`/posts`, {
				title,
				author: 'Alex',
				created: new Date().toLocaleTimeString(),
			})
			dispatch(fetchAllPostsThunk())
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
export const editPostThunk = createAsyncThunk(
	'editPost',
	async (body, { rejectWithValue, dispatch }) => {
		try {
			const { data } = await axios.put(`/posts/${body.id}`, {
				title: body.title,
			})

			return data
			// dispatch(fetchAllPostsThunk())
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
