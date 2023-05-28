import React, { useEffect, useState } from 'react'
import { useFetchData } from '../Hooks/useFetchData'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

export const Comments = () => {
	// const comments = useFetchData('https://jsonplaceholder.typicode.com/comments')

	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('https://dummyjson.com/comments')
				setData(response.data.comments)
			} catch (error) {
				console.error('Error fetching posts:', error)
			}
		}

		fetchData()
	}, [])
	const [searchParams, setSearchParams] = useSearchParams()
	const filter = searchParams.get('filter')
	const onSubmit = e => {
		e.preventDefault()
		const inputValue = e.target.filter.value
		setSearchParams(inputValue ? { filter: inputValue } : {})
	}
	const filteredData = data.filter(item => item.body.includes(filter || ''))
	return (
		<div>
			Comments
			<form onSubmit={onSubmit}>
				<input type='text' name='filter' onSubmit={onSubmit} />
				<button>Search</button>
			</form>
			<ul>
				{filteredData.map(({ body }) => (
					<li>
						<h1>{body}</h1>
						<hr />
					</li>
				))}
			</ul>
		</div>
	)
}
