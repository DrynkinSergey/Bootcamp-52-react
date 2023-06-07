export const selectPosts = state => state.posts
export const selectFilter = state => state.filter
export const selectLoading = state => state.loading

export const selectFilteredData = state => {
	const filter = state.filter
	const posts = state.posts

	return posts.filter(post =>
		post.title.toLowerCase().includes(filter.toLowerCase())
	)
}
