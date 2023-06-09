import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import {
	loginThunk,
	logoutThunk,
	refreshThunk,
	registrationThunk,
} from './operations'

const fulfilledAuth = (state, { payload }) => {
	state.user = payload.user
	state.token = payload.token
	state.loading = false
	state.isLoggedIn = true
}
const rejectedAuth = (state, { payload }) => {
	state.error = payload
	state.loading = false
}
const initialState = {
	user: {
		name: '',
		email: '',
	},
	isLoggedIn: false,
	token: null,
	error: '',
	loading: false,
	isRefreshing: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(logoutThunk.fulfilled, (state, action) => {
				state.user = {
					name: '',
					email: '',
				}
				state.isLoggedIn = false
				state.token = null
			})
			.addCase(refreshThunk.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoggedIn = true
				state.isRefreshing = false
			})
			.addCase(refreshThunk.pending, (state, action) => {
				state.isRefreshing = true
			})
			.addCase(refreshThunk.rejected, (state, action) => {
				state.isRefreshing = false
			})
			.addMatcher(
				isAnyOf(registrationThunk.fulfilled, loginThunk.fulfilled),
				fulfilledAuth
			)
			.addMatcher(
				isAnyOf(registrationThunk.rejected, loginThunk.rejected),
				rejectedAuth
			)
	},
})

export const authReducer = authSlice.reducer
