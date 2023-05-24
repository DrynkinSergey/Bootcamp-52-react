import React, { useEffect, useState } from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../Global.styled'
import axios from 'axios'

export const TodoList = () => {
	const [todos, setTodos] = useState([])
	const [todoTitle, setTodoTitle] = useState('')
	const [skip, setSkip] = useState(0)

	useEffect(() => {
		console.log('First render')
		axios
			.get(`https://dummyjson.com/todos?limit=10&skip=${skip}`)
			.then(({ data }) => setTodos(data.todos))
			.catch(e => console.log(e.message))
	}, [skip])
	// useEffect(() => {
	// 	console.log('Every render')
	// })
	// useEffect(() => {
	// 	console.log('Render if input change')
	// }, [todoTitle])
	// useEffect(() => {
	// 	console.log('Render if skip change')
	// }, [skip])
	// useEffect(() => {
	// 	console.log('Render if skip or input change')
	// }, [skip, todoTitle])

	const handleDelete = id => {
		// const newArray = this.state.todos.filter(item => item.id !== id)
		// this.setState({ todos: newArray })

		////////////////////HOOKS////////////////////

		// const newArray = todos.filter(item => item.id !== id)
		// setTodos(newArray)

		setTodos(todos.filter(item => item.id !== id))
	}
	const handleAddTodo = () => {
		// this.setState(prevState => ({
		// 	todos: [
		// 		...prevState.todos,
		// {
		// 	id: crypto.randomUUID(),
		// 	completed: false,
		// 	todo: this.state.todoTitle,
		// },
		// 	],
		// }))
		setTodos(prevState => [
			...prevState,
			{
				id: crypto.randomUUID(),
				completed: false,
				todo: todoTitle,
			},
		])
	}
	const loadMore = () => {
		// this.setState(prevState => ({ skip: prevState.skip + 10 }))
		setSkip(prev => prev + 10)
	}
	const handleChangeInput = event => {
		// this.setState({ todoTitle: event.target.value })
		setTodoTitle(event.target.value)
	}
	return (
		<div>
			<StyledTodoList>
				<Flex gap='30'>
					<StyledInput type='text' onChange={handleChangeInput} />
					<StyledButton onClick={handleAddTodo}>Add</StyledButton>
				</Flex>
				{todos.map(({ todo, id, completed }, index) => (
					<StyledTodo key={id}>
						<input type='checkbox' />
						<span>
							{index + 1}.{todo}
						</span>
						<StyledButton size='18px' onClick={() => handleDelete(id)}>
							Delete
						</StyledButton>
					</StyledTodo>
				))}
				<StyledButton size='18px' onClick={() => loadMore()}>
					Load More
				</StyledButton>
			</StyledTodoList>
		</div>
	)
}

// export class TodoList extends React.Component {
// 	state = {
// 		todos: [],
// 		todoTitle: '',
// 		skip: 0,
// 	}
// 	componentDidMount() {
// axios
// 	.get(`https://dummyjson.com/todos?limit=10&skip=${this.state.skip}`)
// 	.then(({ data }) => this.setState({ todos: data.todos }))
// 	.catch(e => console.log(e.message))
// 	}
// 	componentDidUpdate(_, prevState) {
// 		if (prevState.skip !== this.state.skip) {
// 			axios
// 				.get(`https://dummyjson.com/todos?limit=10&skip=${this.state.skip}`)
// 				.then(({ data }) =>
// 					this.setState(prevState => ({
// 						todos: [...prevState.todos, ...data.todos],
// 					}))
// 				)
// 		}
// 	}

// handleDelete = id => {
// 	const newArray = this.state.todos.filter(item => item.id !== id)
// 	this.setState({ todos: newArray })
// }
// handleAddTodo = () => {
// 	this.setState(prevState => ({
// 		todos: [
// 			...prevState.todos,
// 			{
// 				id: crypto.randomUUID(),
// 				completed: false,
// 				todo: this.state.todoTitle,
// 			},
// 		],
// 	}))
// }
// loadMore = () => {
// 	this.setState(prevState => ({ skip: prevState.skip + 10 }))
// }
// handleChangeInput = event => {
// 	this.setState({ todoTitle: event.target.value })
// }
// 	render() {
// 		const { todos } = this.state
// 		return (
// 			<div>
// 				<StyledTodoList>
// 					<Flex gap='30'>
// 						<StyledInput type='text' onChange={this.handleChangeInput} />
// 						<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
// 					</Flex>
// 					{todos.map(({ todo, id, completed }) => (
// 						<StyledTodo key={id}>
// 							<input type='checkbox' />
// 							<span>
// 								{id}.{todo}
// 							</span>
// 							<StyledButton size='18px' onClick={() => this.handleDelete(id)}>
// 								Delete
// 							</StyledButton>
// 						</StyledTodo>
// 					))}
// 					<StyledButton size='18px' onClick={() => this.loadMore()}>
// 						Load More
// 					</StyledButton>
// 				</StyledTodoList>
// 			</div>
// 		)
// 	}
// }
