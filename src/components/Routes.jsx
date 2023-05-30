import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import { Layout } from './Layout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import OurAim from '../pages/AboutPage/OurAim'
import OurMission from '../pages/AboutPage/OurMission'
import { ColorPicker } from '../pages/ColorPicker/ColorPicker'
import Users from '../pages/Users/Users'
import SingleUserPage from '../pages/SingleUserPage/SingleUserPage'
import UserPosts from '../pages/SingleUserPage/UserPosts'

const RoutesList = () => {
	return (
		<Routes>
			{/* <Route path='*' element={<Navigate to='/' />} /> */}
			<Route path='*' element={<NotFound />} />
			<Route path='/usersList' element={<Navigate to='/users' />} />
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='users' element={<Users />} />

				<Route path='users/:id/' element={<SingleUserPage />}>
					<Route path='posts' element={<UserPosts />} />
				</Route>

				<Route path='about' element={<AboutPage />}>
					<Route
						index
						element={<h1>Hello to our page, you can choise one of link</h1>}
					/>
					<Route path='ourAim' element={<OurAim />} />
					<Route path='ourMission' element={<OurMission />} />
				</Route>

				<Route path='colorPicker' element={<ColorPicker />} />
				<Route path='login' element={<h1>Login</h1>} />
			</Route>
		</Routes>
	)
}

export default RoutesList
