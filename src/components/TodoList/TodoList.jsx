import React from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../Global.styled'
export class TodoList extends React.Component {
	state = {
		todos: this.props.todos,
		todoTitle: '',
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
		alert('hello')
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
