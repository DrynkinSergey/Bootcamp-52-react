import { Route, Routes } from 'react-router-dom'
import { CuteTodo } from './pages/Todo/CuteTodo'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import './index.css'
import { Layout } from './components/Layout'
import Home from './pages/Home'
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='tasks' element={<CuteTodo />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='registration' element={<RegistrationPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
