import { createAction } from '@reduxjs/toolkit'

export const addTodo = createAction('todos/addTodo')
export const deleteTodo = createAction('todos/deleteTodo')
export const toggleTodo = createAction('todos/toggleTodo')
export const setFilter = createAction('todos/setFilter')

// export const addTodoAC = title => ({
// 	type: ADD_TODO,
// 	payload: { id: crypto.randomUUID(), completed: false, title },
// })
// export const deleteTodoAC = id => ({
// 	type: DELETE_TODO,
// 	payload: id,
// })
// export const setFilterAC = filter => ({
// 	type: SET_FILTER,
// 	payload: filter,
// })
// export const toggleTodoAC = id => ({
// 	type: TOGGLE_TODO,
// 	payload: id,
// })
