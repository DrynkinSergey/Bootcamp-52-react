import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	addTodoAC,
	deleteTodoAC,
	setFilterAC,
	toggleTodoAC,
} from '../../redux/Todo/actions'
import {
	selectFilter,
	selectFilteredData,
	selectTodos,
} from '../../redux/Todo/selectors'

const TodoList = () => {
	const filter = useSelector(selectFilter)
	const filteredData = useSelector(state => selectFilteredData(state, filter))
	console.log(filter)
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	const submitHandler = e => {
		e.preventDefault()
		dispatch(addTodoAC(value))
		setValue('')
	}
	// const getFilteredData = filter => {
	// 	switch (filter) {
	// 		case 'All':
	// 			return todos
	// 		case 'Active':
	// 			return todos.filter(todo => !todo.completed)
	// 		case 'Completed':
	// 			return todos.filter(todo => todo.completed)
	// 		default:
	// 			return todos
	// 	}
	// }
	// const filteredData = getFilteredData(filter)
	return (
		<>
			<h1>TodoList</h1>
			<form onSubmit={submitHandler}>
				<input
					type='text'
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button onClick={() => {}}>Add todo</button>
			</form>
			<ul>
				{filteredData.map((todo, idx) => (
					<li key={todo.id}>
						<span>
							<input
								type='checkbox'
								checked={todo.completed}
								onChange={() => dispatch(toggleTodoAC(todo.id))}
							/>
						</span>
						{idx + 1}. {todo.title}
						<button onClick={() => dispatch(deleteTodoAC(todo.id))}>
							Delete
						</button>
					</li>
				))}
			</ul>
			<div>
				<button onClick={() => dispatch(setFilterAC('All'))}>All</button>
				<button onClick={() => dispatch(setFilterAC('Active'))}>Active</button>
				<button onClick={() => dispatch(setFilterAC('Completed'))}>
					Completed
				</button>
			</div>
		</>
	)
}

export default TodoList
