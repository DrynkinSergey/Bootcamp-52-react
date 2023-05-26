import React from 'react'
import { Header } from './components/Header/Header'
import { Todos } from './components/Todos/Todos'
import { ContextProvider } from './HOC/ContextProvider'
import { Filter } from './components/Filter/Filter'
import { styled } from 'styled-components'

export const App = () => {
	return (
		<Container>
			<ContextProvider>
				<Header />
				<Todos />
				<Filter />
				{/* <Box />
				<Box2 /> */}
			</ContextProvider>
		</Container>
	)
}
const Box = styled.div`
	height: 100px;
	width: 100px;
	background-color: red;
`
const Box2 = styled.div`
	height: 200px;
	width: 200px;
	background-color: violet;
`
const Container = styled.div`
	max-width: 80%;
	margin: 0 auto;
	@media (max-width: 768px) {
		max-width: 100%;
		padding: 0 15px;

		div${Box} {
			background-color: green;
		}
		div${Box2} {
			background-color: tomato;
			width: 100px;
			height: 100px;
		}
	}
`
