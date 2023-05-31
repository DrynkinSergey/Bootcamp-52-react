import React from 'react'
import styled from 'styled-components'

const Counter = () => {
	return (
		<Wrapper>
			<Flex>
				<Button>-</Button>
				<h1>0</h1>
				<Button>+</Button>
			</Flex>
		</Wrapper>
	)
}

export default Counter
const Wrapper = styled.div`
	display: flex;
	min-height: 100vh;
	justify-content: center;
	align-items: center;
`
export const Flex = styled.div`
	display: flex;
	gap: 20px;
`
export const Button = styled.button`
	padding: 5px 25px;
`
