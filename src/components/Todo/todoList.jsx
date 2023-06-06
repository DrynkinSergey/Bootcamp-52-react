import { SingleTodo } from './singleTodo'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectFilter,
	selectFilteredData,
	selectTodos,
} from '../../redux/Todo/selectors'
import { useEffect } from 'react'
import { Filter } from './Filter'
import { setCounter } from '../../redux/Todo/todoSlice'

export const TodoList = () => {
	const todos = useSelector(selectFilteredData)
	const counter = useSelector(state => state.todoList.counter)
	const dispatch = useDispatch()
	useEffect(() => {}, [dispatch])
	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<button
				className='text-white text-2xl border-2 bg-blue-500 px-4 py-2'
				onClick={() => dispatch(setCounter())}
			>
				{counter}
			</button>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
				<Filter />
			</ul>
		</div>
	)
}
