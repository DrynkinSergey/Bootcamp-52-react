import React, { Suspense } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from './NavBar'
import { Blocks } from 'react-loader-spinner'

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
				<Suspense
					fallback={
						<Blocks
							visible={true}
							height='80'
							width='80'
							ariaLabel='blocks-loading'
							wrapperStyle={{}}
							wrapperClass='blocks-wrapper'
						/>
					}
				>
					<Outlet />
				</Suspense>
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
