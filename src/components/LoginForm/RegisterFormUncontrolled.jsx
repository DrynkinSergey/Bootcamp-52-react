import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'

export class RegisterFormUncontrolled extends React.Component {
	onSubmit = e => {
		e.preventDefault()
		const form = e.target
		const name = form.name.value
		const password = form.password.value
		const email = form.email.value
		console.log({ name, password, email })
		form.reset()
	}

	render() {
		return (
			<StyledLoginForm onSubmit={this.onSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput type='text' name='name' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput type='text' name='email' />
				</StyledLabel>
				<br />

				<StyledLabel>
					Password:
					<StyledInput type='password' name='password' />
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
