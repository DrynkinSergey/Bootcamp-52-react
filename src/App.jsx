import { Route, Routes } from 'react-router-dom'
import { CuteTodo } from './pages/Todo/CuteTodo'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import './index.css'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { refreshThunk } from './redux/Auth/operations'
import { toast } from 'react-toastify'
import { PrivateRoute } from './hoc/PrivateRoute'
function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
			.unwrap()
			.catch(() => toast.error('Token is not exist'))
	}, [dispatch])
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path='tasks'
						element={
							<PrivateRoute>
								<CuteTodo />
							</PrivateRoute>
						}
					/>
					<Route path='login' element={<LoginPage />} />
					<Route path='registration' element={<RegistrationPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
