import React from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../Global.styled'

export const Counter = () => {
	return (
		<StyledCounter>
			<h1>{0}</h1>
			<Flex justify='center' gap='30'>
				<StyledButton>minus</StyledButton>
				<StyledButton>reset</StyledButton>
				<StyledButton>plus</StyledButton>
			</Flex>
		</StyledCounter>
	)
}
