import { Route, Routes } from 'react-router-dom'
import { CuteTodo } from './components/Todo/CuteTodo'
import './index.css'
import { Layout } from './components/Layout'
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<h1>Home</h1>} />

					<Route path='tasks' element={<CuteTodo />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
