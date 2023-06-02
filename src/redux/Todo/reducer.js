import { addTodo, deleteTodo, setFilter, toggleTodo } from './actions'

const initialState = {
	todos: [],
	filter: 'All',
}

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case addTodo.type: {
			return {
				...state,
				todos: [...state.todos, action.payload],
			}
		}
		case deleteTodo.type: {
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			}
		}
		case toggleTodo.type: {
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo
				),
			}
		}
		case setFilter.type: {
			return {
				...state,
				filter: action.payload,
			}
		}
		default:
			return state
	}
}
