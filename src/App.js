import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import colors from './assets/colors.json'
import { GitRepos } from './components/GitRepos/GitRepos'
import { Counter } from './components/Counter/Counter'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { TodoList } from './components/TodoList/TodoList'
import Modal from './components/Modal/Modal'
class App extends React.Component {
	render() {
		return (
			<>
				<Counter />
				{/* <ColorPicker colors={colors} /> */}
				{/* <TodoList /> */}
				{/* <Modal /> */}
				{/* <GitRepos /> */}
				<ToastContainer />
			</>
		)
	}
}

export default App
