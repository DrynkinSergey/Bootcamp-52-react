import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(({ data }) => setUsers(data))
	}, [])
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user, index) => (
					<li key={user.id}>
						<Link to={`${user.id}`}>
							{index + 1}. <span>{user.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Users
