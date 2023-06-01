import { ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO } from './constants'

export const addTodoAC = title => ({
	type: ADD_TODO,
	payload: { id: crypto.randomUUID(), completed: false, title },
})
export const deleteTodoAC = id => ({
	type: DELETE_TODO,
	payload: id,
})
export const setFilterAC = filter => ({
	type: SET_FILTER,
	payload: filter,
})
export const toggleTodoAC = id => ({
	type: TOGGLE_TODO,
	payload: id,
})
