import { createAsyncThunk } from '@reduxjs/toolkit'
import { clearToken, instance, setToken } from '../../config/apiConfig'

export const registrationThunk = createAsyncThunk(
	'auth/registration',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await instance.post('users/signup', credentials)
			setToken(data.token)
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
			setToken(data.token)

			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const logoutThunk = createAsyncThunk(
	'auth/logout',
	async (_, { rejectWithValue }) => {
		try {
			await instance.post('users/logout')
			clearToken()
		} catch (error) {}
	}
)
