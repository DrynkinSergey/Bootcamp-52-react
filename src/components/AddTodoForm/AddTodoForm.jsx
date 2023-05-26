import React, { useContext, useState } from 'react'
import { TodoContext } from '../../HOC/ContextProvider'

export const AddTodoForm = () => {
	const { addTodo } = useContext(TodoContext)
	const [newTodo, setNewTodo] = useState('')
	// const onSubmit = e => {
	// 	e.preventDefault()
	// 	addTodo(e.target.newTodo.value)
	// }
	const onSubmit = e => {
		e.preventDefault()
		addTodo(newTodo)
	}
	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				name='newTodo'
				value={newTodo}
				onChange={e => setNewTodo(e.target.value)}
			/>
			<button>Add</button>
		</form>
	)
}
