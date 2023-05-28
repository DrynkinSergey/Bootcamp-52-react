import React, { useContext } from 'react'
import { TodoContext } from '../HOC/ContextProvider'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
	const navigate = useNavigate()
	const { login } = useContext(TodoContext)
	const onSubmit = e => {
		e.preventDefault()
		login(e.target.username.value)
		navigate('/')
	}
	return (
		<>
			<div>Login</div>
			<form onSubmit={onSubmit}>
				<input type='text' name='username' />
				<input type='password' name='password' />
				<button>Login</button>
			</form>
		</>
	)
}
