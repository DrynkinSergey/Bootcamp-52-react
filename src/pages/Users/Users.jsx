import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { fetchUsers } from '../../services/Api.js'

const Users = () => {
	const [users] = useFetch(fetchUsers)
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
