import React, { createContext, useMemo, useState } from 'react'

export const TodoContext = createContext()

export const ContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([])
	const [filter, setFilter] = useState('all')
	const addTodo = todo => {
		setTodos(prev => [
			...prev,
			{ id: crypto.randomUUID(), todo, completed: false },
		])
	}

	const deleteTodo = id => {
		setTodos(todos.filter(item => item.id !== id))
	}

	const toggleTodo = id => {
		setTodos(
			todos.map(item =>
				item.id === id ? { ...item, completed: !item.completed } : item
			)
		)
	}

	const getUncompletedTasks = () => {
		return todos.reduce((uncompleted, currentTodo) => {
			return !currentTodo.completed ? uncompleted + 1 : uncompleted
		}, 0)
	}

	const getFilteredData = () => {
		switch (filter) {
			case 'active':
				return todos.filter(item => !item.completed)
			case 'completed':
				return todos.filter(item => item.completed)
			default:
				return todos
		}
	}
	const filteredTodos = getFilteredData()
	const uncompletedTodos = useMemo(() => getUncompletedTasks(), [todos])

	const myContextOptions = {
		addTodo,
		todos: filteredTodos,
		toggleTodo,
		deleteTodo,
		setFilter,
		uncompletedTodos,
	}

	return (
		<TodoContext.Provider value={myContextOptions}>
			{children}
		</TodoContext.Provider>
	)
}

// <div> div</div>
