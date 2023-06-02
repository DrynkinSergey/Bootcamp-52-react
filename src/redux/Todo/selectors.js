export const selectTodos = state => state.tasks.todos
export const selectFilter = state => state.filter

export const selectFilteredData = (state, filter) => {
	switch (filter) {
		case 'All':
			return state.tasks.todos
		case 'Active':
			return state.tasks.todos.filter(todo => !todo.completed)
		case 'Completed':
			return state.tasks.todos.filter(todo => todo.completed)
		default:
			return state.tasks.todos
	}
}
