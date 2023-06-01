import { ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from './constants'

const initialState = {
	todos: [],
	filter: 'All',
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO: {
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		}
		case DELETE_TODO: {
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			}
		}
		case TOGGLE_TODO: {
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo
				),
			}
		}
		case SET_FILTER: {
			return {
				...state,
				filter: action.payload,
			}
		}
		default:
			return state
	}
}
