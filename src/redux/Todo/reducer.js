import { ADD_TODO, DELETE_TODO } from './constants'

const initialState = {
	todos: [{ id: 1, title: 'redux' }],
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
		default:
			return state
	}
}
