import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'

const INITIAL_STATE = {
	name: '',
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

	// handleNameChange = e => {
	// 	this.setState({ name: e.target.value })
	// }
	// handlePasswordChange = e => {
	// 	this.setState({ password: e.target.value })
	// }
	// handleEmailChange = e => {
	// 	this.setState({ email: e.target.value })
	// }
	render() {
		const { name, email, password } = this.state
		return (
			<StyledLoginForm onSubmit={this.onSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput
						type='text'
						name='name'
						value={name}
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

				{/* <br />
				<StyledLabel>
					age:
					<StyledInput type='text' name='age' />
				</StyledLabel>

				<br />
				<StyledLabel>
					gender:
					<StyledInput type='text' name='gender' />
				</StyledLabel> */}

				<br />
				<StyledButton type='submit'>Register</StyledButton>
			</StyledLoginForm>
		)
	}
}
