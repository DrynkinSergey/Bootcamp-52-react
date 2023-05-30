import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

const SingleUserPage = () => {
	const { id } = useParams()
	const [user, setUser] = useState({})
	const { name, email, address } = user
	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${id}`
			)
			setUser(res.data)
		}
		fetchUsers()
	}, [id])
	return (
		<div>
			SingleUserPage
			<h1>{name}</h1>
			<h2>{email}</h2>
			{/* undefined.city */}
			<h3>{address?.city}</h3>
			<h3>{address?.street}</h3>
			<Link to='posts'>Show user posts</Link>
			<Outlet />
		</div>
	)
}

export default SingleUserPage
// const s = {
// 	id: 1,
// 	name: 'Leanne Graham',
// 	username: 'Bret',
// 	email: 'Sincere@april.biz',
// 	address: {
// 		street: 'Kulas Light',
// 		suite: 'Apt. 556',
// 		city: 'Gwenborough',
// 		zipcode: '92998-3874',
// 		geo: {
// 			lat: '-37.3159',
// 			lng: '81.1496',
// 		},
// 	},
// 	phone: '1-770-736-8031 x56442',
// 	website: 'hildegard.org',
// 	company: {
// 		name: 'Romaguera-Crona',
// 		catchPhrase: 'Multi-layered client-server neural-net',
// 		bs: 'harness real-time e-markets',
// 	},
// }
