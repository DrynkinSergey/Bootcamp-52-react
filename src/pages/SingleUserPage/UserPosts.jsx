import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { fetchUserPosts } from '../../services/Api'
import { useCallback } from 'react'

const UserPosts = () => {
	const { id } = useParams()
	const fn = useCallback(() => fetchUserPosts(id), [id])
	const [posts, setPosts] = useFetch(fn)
	return (
		<div>
			<h1>UserPosts</h1>
			<ul>
				{posts.map((post, index) => (
					<li key={post.id}>
						{index + 1}.{post.title}
					</li>
				))}
			</ul>
		</div>
	)
}

export default UserPosts
