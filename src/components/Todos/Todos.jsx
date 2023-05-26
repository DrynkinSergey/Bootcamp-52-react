import React, { useContext } from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import { TodoContext } from '../../HOC/ContextProvider'

export const Todos = () => {
	const { todos, users } = useContext(TodoContext)

	return (
		<ul>
			{todos.map(item => {
				const { todo, completed, id } = item
				return <TodoItem key={id} {...item} />
			})}
			{users.map(item => (
				<li>{item.name}</li>
			))}
		</ul>
	)
}
