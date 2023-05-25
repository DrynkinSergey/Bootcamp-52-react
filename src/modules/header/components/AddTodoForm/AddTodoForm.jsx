import React, { useContext } from 'react'
import { TodoContext } from '../../../../context/TodoContext'

export const AddTodoForm = () => {
	const { addTodo } = useContext(TodoContext)

	const onSubmit = e => {
		e.preventDefault()
		addTodo(e.target.title.value)
		e.target.reset()
		e.target.title.focus()
	}
	return (
		<form onSubmit={onSubmit}>
			<input type='text' name='title' />
			<button>Add</button>
		</form>
	)
}
