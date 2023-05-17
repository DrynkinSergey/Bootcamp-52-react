import React from 'react'
import { Flex } from './Global.styled'
import { RegisterForm } from './components/LoginForm/RegisterForm'
class App extends React.Component {
	render() {
		return (
			<Flex justify='center'>
				<RegisterForm />
			</Flex>
		)
	}
}

export default App
