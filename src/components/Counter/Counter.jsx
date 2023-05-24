import React, { useState } from 'react'
import { CounterStyled, StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../Global.styled'
export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(3)
	const increment = () => {
		setCounter(prevState => prevState + step)
	}
	const decrement = () => {
		setCounter(prevState => prevState - step)
	}
	const handleChangeInput = value => {
		setStep(Number(value))
	}
	const reset = () => {
		setCounter(0)
	}

	return (
		<StyledCounter>
			<Flex gap='20'>
				<input type='text' onChange={e => handleChangeInput(e.target.value)} />
			</Flex>
			<CounterStyled color='red'>
				<span>{counter}</span>
			</CounterStyled>
			<Flex justify='center' gap='30'>
				<StyledButton onClick={decrement}>minus</StyledButton>
				<StyledButton onClick={reset}>reset</StyledButton>
				<StyledButton onClick={increment}>plus</StyledButton>
			</Flex>
		</StyledCounter>
	)
}
