import { createSlice } from '@reduxjs/toolkit'
import {
	deletePostThunk,
	editPostThunk,
	fetchAllPostsThunk,
} from './operations'

const pending = (state, action) => {
	state.error = null
	state.loading = true
}

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		posts: [],
		filter: '',
		error: null,
		loading: false,
	},
	reducers: {
		setFilter: (state, action) => {
			state.filter = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAllPostsThunk.pending, pending)
			.addCase(editPostThunk.pending, pending)
			.addCase(deletePostThunk.pending, pending)

			.addCase(fetchAllPostsThunk.fulfilled, (state, action) => {
				state.posts = action.payload
				state.loading = false
			})

			.addCase(fetchAllPostsThunk.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})

			.addCase(editPostThunk.fulfilled, (state, action) => {
				const item = state.posts.find(item => item.id === action.payload.id)
				item.title = action.payload.title
				state.loading = false
			})
		// .addMatcher(
		// 	action => action.type.endsWith('/pending'),
		// 	(state, action) => {
		// 		state.loading = true
		// 		state.error = null
		// 	}
		// )
		// .addMatcher(
		// 	action => action.type.endsWith('/fulfilled'),
		// 	(state, action) => {
		// 		state.loading = false
		// 	}
		// )
	},
})

export const { addPost, setFilter, deletePost, editPost } = postsSlice.actions
export const postReducer = postsSlice.reducer
