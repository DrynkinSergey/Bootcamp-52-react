import React from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { Flex } from '../../Global.styled'
export const TodoList = ({ todos }) => {
	return (
		<div>
			<StyledTodoList>
				<Flex gap='30'>
					<StyledInput type='text' />
					<StyledButton>Add</StyledButton>
				</Flex>
				{todos.map(({ todo, id, completed }) => (
					<StyledTodo key={id}>
						<input type='checkbox' />
						<span>{todo}</span>
						<StyledButton size='18px'>Delete</StyledButton>
					</StyledTodo>
				))}
				<button>Clear</button>
			</StyledTodoList>
		</div>
	)
}
