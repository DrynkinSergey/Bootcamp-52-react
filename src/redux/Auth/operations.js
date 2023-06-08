import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
// testuser_123@mail.com
const instance = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})
const setToken = token => {
	instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearToken = () => {
	instance.defaults.headers.common.Authorization = ''
}

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
