import React, { useEffect, useState } from 'react'
import AddMessage from './AddPost'
import SingleMessage from './SinglePosts'
import axios from 'axios'
import { FilterForm } from './FilterForm'

const Posts = () => {
	const [posts, setposts] = useState([])
	const [newPost, setNewPost] = useState('')

	const sendPost = text => {
		setNewPost(text)
		axios.post('http://localhost:3002/posts', {
			title: text,
			author: 'Sergey',
			created: new Date().toLocaleTimeString(),
		})
	}
	const setFiltered = filter => {
		axios
			.get(`http://localhost:3002/posts?q=${filter}`)
			.then(res => setposts(res.data))
	}
	useEffect(() => {
		axios.get('http://localhost:3002/posts').then(res => setposts(res.data))
	}, [newPost])

	return (
		<div>
			<AddMessage sendPost={sendPost} />
			<FilterForm setFiltered={setFiltered} />
			<ul>
				{posts.map(m => (
					<SingleMessage key={m.id} {...m} />
				))}
			</ul>
		</div>
	)
}

export default Posts
