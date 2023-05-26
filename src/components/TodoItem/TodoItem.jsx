import React, { useContext } from 'react'
import { TodoContext } from '../../HOC/ContextProvider'

export const TodoItem = ({ id, completed, todo }) => {
	const { deleteTodo, toggleTodo } = useContext(TodoContext)
	return (
		<li key={id}>
			<input
				type='checkbox'
				onChange={() => toggleTodo(id)}
				checked={completed}
			/>
			<span>{todo}</span>
			<button onClick={() => deleteTodo(id)}>Del</button>
		</li>
	)
}
