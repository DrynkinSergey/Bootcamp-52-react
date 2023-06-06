import { createSelector } from '@reduxjs/toolkit'

export const selectTodos = state => state.todoList.todos
export const selectLoading = state => state.todoList.loading
export const selectTheme = state => state.theme
export const selectFilter = state => state.filter

export const selectFilteredData = createSelector(
	[selectTodos, selectFilter],
	(todos, filter) => {
		console.log('Показ даних від фільтру')

		switch (filter) {
			case 'Active':
				return todos.filter(todo => !todo.completed)
			case 'Completed':
				return todos.filter(todo => todo.completed)
			default:
				return todos
		}
	}
)
export const selectUncompletedTodos = createSelector([selectTodos], todos => {
	console.log('Підрахунок невиконаних завдань')
	return todos.reduce((total, todo) => (todo.completed ? total : total + 1), 0)
})
// export const selectUncompletedTodos = state => {
// 	console.log('Підрахунок невиконаних завдань')
// 	const todos = selectTodos(state)
// 	return todos.reduce((total, todo) => (todo.completed ? total : total + 1), 0)
// }

// export const selectFilteredData = state => {
// 	console.log('Показ даних від фільтру')

// 	const todos = selectTodos(state)
// 	const filter = selectFilter(state)
// 	switch (filter) {
// 		case 'Active':
// 			return todos.filter(todo => !todo.completed)
// 		case 'Completed':
// 			return todos.filter(todo => todo.completed)
// 		default:
// 			return todos
// 	}
// 	// if (filter === 'Active') {
// 	// 	return todos.filter(todo => !todo.completed)
// 	// }
// 	// if (filter === 'Completed') {
// 	// 	return todos.filter(todo => todo.completed)
// 	// }
// 	// if (filter === 'All') {
// 	// 	return todos
// 	// }
// }
