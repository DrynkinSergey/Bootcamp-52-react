import React, { useContext } from 'react'
import { TodoContext } from '../../../../context/TodoContext'

export const TodoList = () => {
	const { filteredTodos, toggleTodo, deleteTodo } = useContext(TodoContext)

	return (
		<ul>
			{filteredTodos.map(({ completed, title, id }) => (
				<li key={id}>
					<input
						type='checkbox'
						onChange={() => toggleTodo(id)}
						checked={completed}
					/>
					<span>{title}</span>
					<button onClick={() => deleteTodo(id)}>Delete</button>
				</li>
			))}
		</ul>
	)
}
