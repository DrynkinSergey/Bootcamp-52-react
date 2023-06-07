import AddMessage from './AddPost'
import SingleMessage from './SinglePosts'
import { FilterForm } from './FilterForm'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectFilter,
	selectFilteredData,
	selectLoading,
} from '../redux/selectors'
import { addPost, editPost, setFilter } from '../redux/postSlice'
import { useEffect } from 'react'
import {
	addPostThunk,
	editPostThunk,
	fetchAllPostsThunk,
} from '../redux/operations'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Posts = () => {
	const location = useLocation()
	const navigate = useNavigate()
	console.log(location)
	const dispatch = useDispatch()
	const posts = useSelector(selectFilteredData)
	const filter = useSelector(selectFilter)
	const loading = useSelector(selectLoading)
	const error = useSelector(state => state.error)
	const sendPost = text => {
		dispatch(addPostThunk(text))
	}
	const edit = data => {
		const newTitle = prompt('Enter new title') ?? data.title
		dispatch(editPostThunk({ id: data.id, title: newTitle }))
	}
	const handleFilterChange = filter => {
		dispatch(setFilter(filter))
	}
	// const sendPost = text => {
	// 	setNewPost(text)
	// 	axios.post('http://localhost:3002/posts', {
	// 		title: text,
	// 		author: 'Sergey',
	// 		created: new Date().toLocaleTimeString(),
	// 	})
	// }
	// const handleFilterChange = filter => {
	// 	axios
	// 		.get(`http://localhost:3002/posts?q=${filter}`)
	// 		.then(res => setposts(res.data))
	// }
	// useEffect(() => {
	// 	axios.get('http://localhost:3002/posts').then(res => setposts(res.data))
	// }, [newPost])

	useEffect(() => {
		dispatch(fetchAllPostsThunk())
	}, [dispatch, navigate])
	return (
		<div>
			<button onClick={() => dispatch(fetchAllPostsThunk())}>Load posts</button>
			<button onClick={() => navigate('about')}>TO ABOUT</button>
			<AddMessage sendPost={sendPost} />
			<FilterForm handleFilterChange={handleFilterChange} />
			<h1>{filter}</h1>
			{loading && <h1>Loading.... </h1>}
			{error ? (
				<h1>Something went wrong! Try again...</h1>
			) : (
				<ul>
					{posts.map(m => (
						<SingleMessage key={m.id} {...m} edit={edit} />
					))}
				</ul>
			)}

			<Outlet />
		</div>
	)
}

export default Posts
