import React, { useMemo, useReducer, useState } from 'react'
import { CounterStyled, StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../Global.styled'
export const Counter = () => {
	// const calculateStm = num => {
	// 	console.log('Calculate')
	// 	for (let i = 0; i < 1000000000; i++) {}
	// 	return num * 2
	// }
	// // const res = calculateStm(step)
	// const res = useMemo(() => calculateStm(step), [step])

	const initialState = {
		counter: 0,
		step: 1,
	}
	const counterReducer = (state, action) => {
		const { counter, step } = state
		console.log(action)
		switch (action.type) {
			case 'increment':
				return {
					...state,
					counter: counter + step,
				}
			case 'decrement': {
				return {
					...state,
					counter: counter - step,
				}
			}
			case 'reset':
				return {
					...state,
					counter: 0,
				}
			case 'setStep':
				return {
					...state,
					step: action.payload,
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(counterReducer, initialState)
	const { counter, step } = state

	return (
		<Flex h='100vh' justify='center' items='center'>
			<StyledCounter>
				<Flex gap='20'>
					<input
						type='text'
						onChange={e =>
							dispatch({ type: 'setStep', payload: +e.target.value })
						}
						// onChange={e => handleChangeInput(e.target.value)}
					/>
				</Flex>
				<CounterStyled color='red'>
					<span>{counter}</span>
				</CounterStyled>
				<Flex justify='center' gap='30'>
					<StyledButton onClick={() => dispatch({ type: 'decrement' })}>
						minus
					</StyledButton>
					<StyledButton onClick={() => dispatch({ type: 'reset' })}>
						reset
					</StyledButton>
					<StyledButton onClick={() => dispatch({ type: 'increment' })}>
						plus
					</StyledButton>
				</Flex>
			</StyledCounter>
		</Flex>
	)
}
