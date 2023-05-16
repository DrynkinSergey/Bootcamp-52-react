import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import colors from './assets/colors.json'
import todos from './assets/todos.json'
function App() {
	return (
		<div>
			<TodoList todos={todos} />
			<Counter />
			<ColorPicker colors={colors} />
		</div>
	)
}

export default App
