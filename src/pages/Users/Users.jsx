import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		const fetchUsers = async () => {
			const res = await axios.get('https://jsonplaceholder.typicode.com/users')
			setUsers(res.data)
		}
		fetchUsers()
	}, [])
	return (
		<>
			<h1>Users</h1>
			{users.map(user => (
				<li key={user.id}>
					<Link to={user.id.toString()}>{user.name}</Link>
					{/* <Link to={`${user.id}`}>{user.name}</Link> */}
				</li>
			))}
		</>
	)
}

export default Users
