import React, { useContext } from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoContext } from '../../HOC/ContextProvider'

export const Todos = () => {
	const { todos } = useContext(TodoContext)

	return (
		<ul>
			{todos.map(item => {
				const { todo, completed, id } = item
				return <TodoItem key={id} {...item} />
			})}
		</ul>
	)
}
