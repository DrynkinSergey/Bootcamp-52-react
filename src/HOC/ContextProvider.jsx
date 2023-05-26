import React, {
	createContext,
	useEffect,
	useMemo,
	useReducer,
	useState,
} from 'react'
import {
	ADD_TODO,
	DELETE_TODO,
	SET_FILTER,
	TOGGLE_TODO,
} from '../Constants/constants'
import axios from 'axios'

export const TodoContext = createContext()

export const ContextProvider = ({ children }) => {
	const initialState = {
		todos: [],
		filter: 'all',
		users: [],
	}

	const todoReducer = (state, action) => {
		const { type, payload } = action
		switch (type) {
			case ADD_TODO:
				return {
					...state,
					todos: [...state.todos, payload],
				}
			case DELETE_TODO:
				return {
					...state,
					todos: state.todos.filter(item => item.id !== payload),
				}
			case TOGGLE_TODO:
				return {
					...state,
					todos: state.todos.map(item =>
						item.id === payload ? { ...item, completed: !item.completed } : item
					),
				}
			case SET_FILTER:
				return {
					...state,
					filter: payload,
				}
			case 'GET_USERS':
				return {
					...state,
					users: payload,
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(todoReducer, initialState)
	const { todos, filter, users } = state

	const getUsers = () => {
		console.log('FETCH USERS')
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => dispatch({ type: 'GET_USERS', payload: res.data }))
	}
	const addTodo = todo => {
		dispatch({
			type: ADD_TODO,
			payload: { id: crypto.randomUUID(), todo, completed: false },
		})
	}
	const setFilter = filter => {
		dispatch({ type: SET_FILTER, payload: filter })
	}
	const deleteTodo = id => {
		dispatch({ type: DELETE_TODO, payload: id })
	}

	const toggleTodo = id => {
		dispatch({ type: TOGGLE_TODO, payload: id })
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
		getUsers,
		users,
		uncompletedTodos,
	}

	return (
		<TodoContext.Provider value={myContextOptions}>
			{children}
		</TodoContext.Provider>
	)
}

// <div> div</div>
