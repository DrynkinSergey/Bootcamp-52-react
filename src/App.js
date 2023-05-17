import { Flex } from './Global.styled'
import React from 'react'
import { TodoList } from './components/TodoList/TodoList'
import todoData from './assets/todos.json'
class App extends React.Component {
	state = {
		mustChange: false,
	}

	render() {
		return (
			<Flex h='100vh' justify='center' items='center' direction='column'>
				<TodoList todos={todoData} />
			</Flex>
		)
	}
}
// function App() {
// 	return (
// 		<Flex h='100vh' justify='center' items='center' direction='column'>
// 			<ColorPicker colors={colorsData} />
// 			<Counter />
// 		</Flex>
// 	)
// }

export default App
