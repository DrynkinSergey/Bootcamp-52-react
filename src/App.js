import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import colors from './assets/colors.json'
import { GitRepos } from './components/GitRepos/GitRepos'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { TodoList } from './components/TodoList/TodoList'
class App extends React.Component {
	render() {
		return (
			<>
				{/* <Counter /> */}
				{/* <ColorPicker colorsData={colors} /> */}
				{/* <TodoList /> */}
				<GitRepos />
				<ToastContainer autoClose={1000} />
			</>
		)
	}
}

export default App
