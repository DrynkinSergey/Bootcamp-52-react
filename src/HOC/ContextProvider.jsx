import React, { useReducer } from 'react'
import { TodoContext } from '../context/TodoContext'
export const ContextProvider = ({ children }) => {
	const initialState = {
		todos: [],
		activeFilter: 'all',
	}
	const todoReducer = (state, action) => {
		const { type, payload } = action
		switch (type) {
			case 'setTodos':
				return {
					...state,
					todos: [...state.todos, payload],
				}
			case 'toggleTodo':
				return {
					...state,
					todos: state.todos.map(item =>
						item.id === payload ? { ...item, completed: !item.completed } : item
					),
				}
			case 'deleteTodo':
				return {
					...state,
					todos: state.todos.filter(item => item.id !== payload),
				}
			case 'setFilter':
				return {
					...state,
					activeFilter: payload,
				}
			default:
				return state
		}
	}
	const [state, dispatch] = useReducer(todoReducer, initialState)
	const addTodo = title => {
		dispatch({
			type: 'setTodos',
			payload: { title, id: crypto.randomUUID(), completed: false },
		})
		// setTodos(prev => [
		// 	...prev,
		// 	{ title, id: crypto.randomUUID(), completed: false },
		// ])
	}
	const toggleTodo = id => {
		dispatch({
			type: 'toggleTodo',
			payload: id,
		})
		// setTodos(
		// 	todos.map(item =>
		// 		item.id === id ? { ...item, completed: !item.completed } : item
		// 	)
		// )
	}
	const getUncompleteTasks = () => {
		return state.todos.reduce((total, current) => {
			return !current.completed ? total + 1 : total
		}, 0)
	}
	const uncompletedTasks = getUncompleteTasks()

	const deleteTodo = id => {
		dispatch({ type: 'deleteTodo', payload: id })
		// setTodos(todos.filter(item => item.id !== id))
	}
	const setActiveFilter = value => {
		dispatch({ type: 'setFilter', payload: value })
		// setTodos(todos.filter(item => item.id !== id))
	}
	const getFilteredTodos = () => {
		const { todos, activeFilter } = state
		switch (activeFilter) {
			case 'completed':
				return todos.filter(item => item.completed)
			case 'active':
				return todos.filter(item => !item.completed)
			default:
				return todos
		}
	}
	const filteredTodos = getFilteredTodos()

	const context = {
		deleteTodo,
		setActiveFilter,
		filteredTodos,
		uncompletedTasks,
		activeFilter: state.activeFilter,
		toggleTodo,
		addTodo,
	}
	return <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
}
