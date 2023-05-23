import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'

const INITIAL_STATE = {
	userName: '',
	email: '',
	password: '',
}

export class RegisterForm extends React.Component {
	state = INITIAL_STATE
	handleChangeInput = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}
	onSubmit = e => {
		e.preventDefault()

		console.log('Дані отримано')
		console.log(this.state)
		this.setState(INITIAL_STATE)
	}

	render() {
		const { userName, email, password } = this.state
		return (
			<StyledLoginForm onSubmit={this.onSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput
						type='text'
						name='userName'
						value={userName}
						onChange={this.handleChangeInput}
					/>
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput
						type='text'
						name='email'
						value={email}
						onChange={this.handleChangeInput}
					/>
				</StyledLabel>
				<br />

				<StyledLabel>
					Password:
					<StyledInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChangeInput}
					/>
				</StyledLabel>


				<br />
				<StyledButton type='submit'>Register</StyledButton>
			</StyledLoginForm>
		)
	}
}
