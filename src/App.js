import React from 'react'
import { Flex } from './Global.styled'
import { RegisterForm } from './components/LoginForm/RegisterForm'
import { RegisterFormUncontrolled } from './components/LoginForm/RegisterFormUncontrolled'
class App extends React.Component {
	render() {
		return (
			<Flex justify='center'>
				<RegisterFormUncontrolled />
			</Flex>
		)
	}
}

export default App
