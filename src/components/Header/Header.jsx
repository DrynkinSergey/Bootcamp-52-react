import React, { useContext } from 'react'
import { AddTodoForm } from '../AddTodoForm/AddTodoForm'
import { TodoContext } from '../../HOC/ContextProvider'
import { styled } from 'styled-components'

export const Header = () => {
	const { uncompletedTodos, getUsers } = useContext(TodoContext)

	return (
		<StyledHeader>
			<h1>Todo List v2.0</h1>
			<h2>you have: {uncompletedTodos} tasks</h2>
			<button onClick={getUsers}>Get users</button>
			<AddTodoForm />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	padding: 40px 20px;
	font-size: calc((1vh + 1vw) * 1.5);
	background-color: lightblue;

	@media (max-width: 1200px) {
		background-color: green;
	}
`
