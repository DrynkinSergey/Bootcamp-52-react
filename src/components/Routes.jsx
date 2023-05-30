import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import { Layout } from './Layout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage/AboutPage'
import OurAim from '../pages/AboutPage/OurAim'
import OurMission from '../pages/AboutPage/OurMission'
import { ColorPicker } from '../pages/ColorPicker/ColorPicker'

const RoutesList = () => {
	return (
		<Routes>
			<Route path='*' element={<NotFound />} />
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />

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
