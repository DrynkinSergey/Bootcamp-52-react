import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/login' element={<h1>Login</h1>} />
				<Route path='*' element={<NotFound />} />
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='about' element={<AboutPage />} />
				</Route>
			</Routes>
		</>
	)
}
