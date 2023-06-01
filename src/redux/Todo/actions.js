import { ADD_TODO, DELETE_TODO } from './constants'

export const addTodoAC = title => ({
	type: ADD_TODO,
	payload: { id: crypto.randomUUID(), completed: false, title },
})
export const deleteTodoAC = id => ({
	type: DELETE_TODO,
	payload: id,
})
