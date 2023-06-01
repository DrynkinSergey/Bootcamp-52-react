import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoAC, deleteTodoAC } from '../../redux/Todo/actions'
import { selectTodos } from '../../redux/Todo/selectors'

const TodoList = () => {
	const todos = useSelector(selectTodos)
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	const submitHandler = e => {
		e.preventDefault()
		dispatch(addTodoAC(value))
		setValue('')
	}
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
				{todos.map((todo, idx) => (
					<li key={todo.id}>
						{idx + 1}. {todo.title}
						<button onClick={() => dispatch(deleteTodoAC(todo.id))}>
							Delete
						</button>
					</li>
				))}
			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</>
	)
}

export default TodoList
