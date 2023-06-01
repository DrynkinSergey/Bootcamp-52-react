import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { incrementAC, decrementAC } from '../../redux/Counter/actions'

const Counter = () => {
	const counter = useSelector(state => state.counter)
	const dispatch = useDispatch()
	return (
		<Wrapper>
			<Flex>
				<Button onClick={() => dispatch(decrementAC())}>-</Button>
				<Button onClick={() => dispatch(decrementAC(-5))}>-5</Button>

				<h1>{counter}</h1>
				<Button onClick={() => dispatch(incrementAC(1))}>+1</Button>
				<Button onClick={() => dispatch(incrementAC(10))}>+10</Button>
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
