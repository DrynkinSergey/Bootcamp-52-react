import { Navigate, Route, Routes } from 'react-router-dom'
import Messages from './components/Posts'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Messages />}>
					<Route path='about' element={<h1>about</h1>} />
					<Route path='random' element={<Navigate to='/' />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
