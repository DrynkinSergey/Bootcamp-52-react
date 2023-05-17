import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './LoginForm.styled'
import { StyledButton } from '../Counter/Counter.styled'

export class RegisterForm extends React.Component {
	render() {
		return (
			<StyledLoginForm onSubmit={this.handleSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput type='text' name='username' />
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

				<br />
				<StyledLabel>
					age:
					<StyledInput type='text' name='age' />
				</StyledLabel>

				<br />
				<StyledLabel>
					gender:
					<StyledInput type='text' name='gender' />
				</StyledLabel>

				<br />
				<StyledButton type='submit'>Register</StyledButton>
			</StyledLoginForm>
		)
	}
}
