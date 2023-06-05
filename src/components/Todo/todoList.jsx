import { SingleTodo } from './singleTodo'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, selectTodos } from '../../redux/Todo/selectors'
import { useEffect } from 'react'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const loading = useSelector(selectLoading)
	const dispatch = useDispatch()
	useEffect(() => {}, [dispatch])
	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				{loading ? <h1 className='text-white'>Loading...</h1> : <ViewData />}
			</ul>
		</div>
	)
}
