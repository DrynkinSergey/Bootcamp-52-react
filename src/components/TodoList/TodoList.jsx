import React from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../Global.styled'
export class TodoList extends React.Component {
	state = {
		todos: [],
		todoTitle: '',
	}
	componentDidMount() {
		console.log('mount')
		const todosFromLS = JSON.parse(window.localStorage.getItem('values'))
		// todosFromLS?.length && this.setState({ todos: todosFromLS })
		if (todosFromLS) {
			this.setState({ todos: todosFromLS })
		}
	}
	componentDidUpdate(_, prevState) {
		if (prevState.todos.length !== this.state.todos.length) {
			window.localStorage.setItem('values', JSON.stringify(this.state.todos))
			console.log('Змінився розмір массиву')
		}
		if (prevState.todoTitle !== this.state.todoTitle) {
			console.log('Змінився розмір строки пошуку')
		}
		if (this.state.todos.length === 4) {
			console.log('Вітаю ви дойшли до 4 туду')
		}
	}

	handleDelete = id => {
		const newArray = this.state.todos.filter(item => item.id !== id)
		this.setState({ todos: newArray })
	}
	handleAddTodo = () => {
		this.setState(prevState => ({
			todos: [
				...prevState.todos,
				{
					id: crypto.randomUUID(),
					completed: false,
					todo: this.state.todoTitle,
				},
			],
		}))
	}
	handleRemoveAllTodos = () => {
		this.setState({ todos: [] })
	}
	handleChangeInput = event => {
		this.setState({ todoTitle: event.target.value })
	}
	render() {
		const { todos } = this.state
		return (
			<div>
				<StyledTodoList>
					<Flex gap='30'>
						<StyledInput type='text' onChange={this.handleChangeInput} />
						<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
					</Flex>
					{todos.map(({ todo, id, completed }) => (
						<StyledTodo key={id}>
							<input type='checkbox' />
							<span>{todo}</span>
							<StyledButton size='18px' onClick={() => this.handleDelete(id)}>
								Delete
							</StyledButton>
						</StyledTodo>
					))}
					<button onClick={this.handleRemoveAllTodos}>Clear</button>
				</StyledTodoList>
			</div>
		)
	}
}

// export const TodoList = ({ todos }) => {
// 	return (
// 		<div>
// 			<StyledTodoList>
// 				<Flex gap='30'>
// 					<StyledInput type='text' />
// 					<StyledButton>Add</StyledButton>
// 				</Flex>
// 				{todos.map(({ todo, id, completed }) => (
// 					<StyledTodo key={id}>
// 						<input type='checkbox' />
// 						<span>{todo}</span>
// 						<StyledButton size='18px'>Delete</StyledButton>
// 					</StyledTodo>
// 				))}
// 				<button>Clear</button>
// 			</StyledTodoList>
// 		</div>
// 	)
// }
