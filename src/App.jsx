import { Route, Routes } from 'react-router-dom'
import { CuteTodo } from './pages/Todo/CuteTodo'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import './index.css'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from './redux/Auth/operations'
import { toast } from 'react-toastify'
import { PrivateRoute } from './hoc/PrivateRoute'
import { selectIsRefreshing } from './redux/selectors'
function App() {
	const dispatch = useDispatch()
	const isRefresh = useSelector(selectIsRefreshing)
	useEffect(() => {
		dispatch(refreshThunk())
			.unwrap()
			.catch(() => toast.error('Token is not exist'))
	}, [dispatch])
	return isRefresh ? (
		<div className='h-screen bg-darkMain flex justify-center items-center'>
			{/* <h1 className='text-blue-500 text-4xl'>Loading...</h1> */}
		</div>
	) : (
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
