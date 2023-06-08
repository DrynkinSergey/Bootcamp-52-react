import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, registrationThunk } from './operations'

const fulfilledAuth = (state, { payload }) => {
	state.user = payload.user
	state.token = payload.token
	state.loading = false
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
	token: null,
	error: '',
	loading: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
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
