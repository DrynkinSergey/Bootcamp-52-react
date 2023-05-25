import React, { useContext } from 'react'
import { AddTodoForm } from '../AddTodoForm/AddTodoForm'
import { TodoContext } from '../../../../context/TodoContext'

export const Header = () => {
	const { uncompletedTasks } = useContext(TodoContext)
	return (
		<header>
			<h1>TodoList</h1>
			<h2>Uncompleted: {uncompletedTasks}</h2>
			<AddTodoForm />
		</header>
	)
}
