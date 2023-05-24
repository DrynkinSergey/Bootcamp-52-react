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

	const handleDelete = id => {
		setTodos(todos.filter(item => item.id !== id))
	}
	const handleAddTodo = () => {
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
		setSkip(prev => prev + 10)
	}
	const handleChangeInput = event => {
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
