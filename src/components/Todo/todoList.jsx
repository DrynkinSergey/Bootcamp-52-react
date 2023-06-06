import { SingleTodo } from './singleTodo'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, selectTodos } from '../../redux/Todo/selectors'
import { useEffect } from 'react'
import { Filter } from './Filter'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const dispatch = useDispatch()
	useEffect(() => {}, [dispatch])
	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
				<Filter />
			</ul>
		</div>
	)
}
