import { Link, useParams } from 'react-router-dom'
import { useFetchData } from '../Hooks/useFetchData'
export const UserPosts = () => {
	const { id } = useParams()
	const postByUser = useFetchData(
		`https://jsonplaceholder.typicode.com/posts?userId=${id}`
	)
	return (
		<div>
			{' '}
			<ul>
				{postByUser.map((user, index) => (
					<li key={user.id}>
						<Link to={`${user.id}`}>
							{index + 1}. <span>{user.title}</span>
							<p>{user.body}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
