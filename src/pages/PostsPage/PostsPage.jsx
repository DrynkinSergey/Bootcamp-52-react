import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { fetchPosts } from '../../services/Api'

const PostsPage = () => {
	const [posts, setPosts] = useFetch(fetchPosts)

	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('q')

	useEffect(() => {
		if (!query) {
			return
		}
		const fetchData = async () => {
			try {
				const res = await axios.get(
					`https://dummyjson.com/posts/search?q=${query}`
				)
				setPosts(res.data.posts)
			} catch (error) {}
		}
		fetchData()
	}, [query])

	const filterPosts = e => {
		e.preventDefault()
		const queryStr = e.target.query.value
		setSearchParams(queryStr ? { q: queryStr } : {})
	}
	// const filteredData = query
	// 	? posts.filter(post => post.title.includes(query))
	// 	: posts
	return (
		<>
			<h1>Posts</h1>
			<form onSubmit={filterPosts}>
				<input type='text' name='query' />
				<button>Search</button>
			</form>
			<ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</>
	)
}

export default PostsPage
