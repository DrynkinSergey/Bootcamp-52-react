import { SingleTodo } from './singleTodo'

import { useGetTodosQuery } from '../../redux/todosApi'

export const TodoList = () => {
	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	const { data: todos = [], isLoading, isError } = useGetTodosQuery()
	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				{isLoading ? (
					<h1 className='text-white text-2xl'>Loading...</h1>
				) : (
					<ViewData />
				)}
			</ul>
		</div>
	)
}
