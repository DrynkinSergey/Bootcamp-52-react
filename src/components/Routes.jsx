import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import { Layout } from './Layout'
import HomePage from '../pages/HomePage'
import { AboutPage, OurAim, OurMission } from '../pages/AboutPage'

import { ColorPicker } from '../pages/ColorPicker/ColorPicker'

import Login from '../pages/Login/Login'
import PrivateRoute from '../HOC/PrivateRoute'
import PublicRoute from '../HOC/PublicRoute'

const Users = lazy(() => import('../pages/Users/Users'))
const PostsPage = lazy(() => import('../pages/PostsPage/PostsPage'))
const UserPosts = lazy(() => import('../pages/SingleUserPage/UserPosts'))
const SingleUserPage = lazy(() =>
	import('../pages/SingleUserPage/SingleUserPage')
)

const RoutesList = () => {
	return (
		<Routes>
			{/* <Route path='*' element={<Navigate to='/' />} /> */}
			<Route path='*' element={<NotFound />} />
			<Route path='/usersList' element={<Navigate to='/users' />} />
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='users' element={<Users />} />

				<Route
					path='posts'
					element={
						<PrivateRoute>
							<PostsPage />
						</PrivateRoute>
					}
				/>

				<Route path='users/:id/' element={<SingleUserPage />}>
					<Route
						path='posts'
						element={
							<PrivateRoute>
								<UserPosts />
							</PrivateRoute>
						}
					/>
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
			</Route>
			<Route
				path='/login'
				element={
					<PublicRoute>
						<Login />
					</PublicRoute>
				}
			/>
		</Routes>
	)
}

export default RoutesList
