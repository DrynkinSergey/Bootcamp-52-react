import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GitRepos } from './components/GitRepos/GitRepos'
class App extends React.Component {
	render() {
		return (
			<>
				<GitRepos />
				<ToastContainer />
			</>
		)
	}
}

export default App
