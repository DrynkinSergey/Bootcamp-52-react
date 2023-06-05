import axios from 'axios'
import {
	addTodo,
	fetchTodos,
	fetching,
	error,
	success,
	deleteTodo,
} from './todoSlice'

axios.defaults.baseURL = 'https://644b9af24bdbc0cc3a95949b.mockapi.io/'

export const fetchTodosThunk = () => async dispatch => {
	try {
		dispatch(fetching())
		const res = await axios.get('/todos')
		dispatch(fetchTodos(res.data))
		dispatch(success())
	} catch (e) {
		dispatch(error(e.message))
	}
}
export const deleteTodoThunk = id => async dispatch => {
	try {
		await axios.delete(`/todos/${id}`)
		dispatch(deleteTodo(id))
	} catch (e) {
		dispatch(error(e.message))
	}
}

export const addTodoThunk = title => async dispatch => {
	try {
		const res = await axios.post('/todos', { title, completed: false })
		dispatch(addTodo(res.data))
		// dispatch(fetchTodosThunk())
	} catch (error) {
		console.log(error.message)
	}
}
