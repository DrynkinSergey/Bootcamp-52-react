import { useParams } from 'react-router-dom'
import { useFetchData } from '../Hooks/useFetchData'

export const PostInfo = () => {
	const { id } = useParams()
	const data = useFetchData(`https://jsonplaceholder.typicode.com/posts/${id}`)
	return (
		<div>
			<h1>Post info</h1>
			<h2>{data.title}</h2>
			<h2>{data.body}</h2>
		</div>
	)
}
