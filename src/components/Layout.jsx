import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from './NavBar'

export const Layout = () => {
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<LayoutWrapper>
			<NavBar />
			<WrapperOutlet>
				{location.pathname !== '/' && (
					<button onClick={() => navigate(-1)}>Go Back</button>
				)}
				{/* <button onClick={() => navigate(1)}>Go Next</button> */}
				<Outlet />
			</WrapperOutlet>
		</LayoutWrapper>
	)
}

const LayoutWrapper = styled.main`
	display: grid;
	grid-template-columns: 1fr;
`
const WrapperOutlet = styled.div`
	padding: 20px;
	padding-left: 290px;
`
