import { useDispatch } from 'react-redux'
import { deletePostThunk } from '../redux/operations'

const SinglePosts = ({ id, title, author, created, edit }) => {
	const dispatch = useDispatch()
	return (
		<li>
			<h1 onClick={() => edit({ id, title })}>Text:{title}</h1>
			<h5>Author:{author}</h5>
			<span>CreatedAt: {created}</span>
			<button onClick={() => dispatch(deletePostThunk(id))}>Delete</button>
		</li>
	)
}

export default SinglePosts
