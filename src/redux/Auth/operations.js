import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// testuser_123@mail.com
const instance = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})

export const registrationThunk = createAsyncThunk(
	'auth/registration',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await instance.post('users/signup', credentials)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await instance.post('users/login', credentials)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
