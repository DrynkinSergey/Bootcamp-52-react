import { SingleTodo } from './singleTodo'

import { useDispatch, useSelector } from 'react-redux'
import { selectTodos } from '../../redux/Todo/selectors'
import { useEffect } from 'react'
import { fetchTodosThunk } from '../../redux/Todo/operations'

export const TodoList = () => {
	const dispatch = useDispatch()
	const online = useSelector(state => state.auth.user.name)
	useEffect(() => {
		online && dispatch(fetchTodosThunk())
	}, [dispatch, online])
	const data = useSelector(selectTodos)
	const ViewData = () =>
		data.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
			</ul>
		</div>
	)
}
