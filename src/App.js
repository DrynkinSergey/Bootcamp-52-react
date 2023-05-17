import { Flex } from './Global.styled'
import { Counter } from './components/Counter/Counter'
function App() {
	return (
		<Flex h='100vh' justify='center' items='center'>
			<Counter />
		</Flex>
	)
}

export default App
