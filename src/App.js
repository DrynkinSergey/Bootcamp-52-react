import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Users from './pages/Users'
import { SingleUser } from './pages/SingleUser'
import { UserPosts } from './pages/UserPosts'
import { PostInfo } from './pages/PostInfo'
import { Comments } from './pages/Comments'
import { Login } from './pages/Login'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<h1>Home page</h1>} />
					<Route path='about' element={<h1>About page</h1>} />
					<Route path='users' element={<Users />} />
					<Route path='comments' element={<Comments />} />
					<Route path='users/:id/' element={<SingleUser />}>
						<Route path='posts' element={<UserPosts />} />
					</Route>

					<Route path='users/:id/posts/:id' element={<PostInfo />} />
					<Route path='login' element={<Login />} />
				</Route>
			</Routes>
		</>
	)
}
