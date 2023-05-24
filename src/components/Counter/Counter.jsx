import React, { useState } from 'react'
import { CounterStyled, StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../Global.styled'
export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(3)
	console.log('render')
	const increment = () => {
		// this.setState(prevState => ({
		// 	counter: prevState.counter + this.state.step,
		// }))
		setCounter(prevState => prevState + step)
	}
	const decrement = () => {
		// this.setState(prevState => ({
		// 	counter: prevState.counter - this.state.step,
		// }))
		setCounter(prevState => prevState - step)
	}
	const handleChangeInput = value => {
		// this.setState({ step: +target.value })
		setStep(Number(value))
	}
	const reset = () => {
		// this.setState({ counter: 0 })
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
// export class Counter extends React.Component {
// 	state = {
// 		counter: 0,
// 		step: 1,
// 	}

// increment = () => {
// 	this.setState(prevState => ({
// 		counter: prevState.counter + this.state.step,
// 	}))
// }
// decrement = () => {
// 	this.setState(prevState => ({
// 		counter: prevState.counter - this.state.step,
// 	}))
// }
// handleChangeInput = ({ target }) => {
// 	this.setState({ step: +target.value })
// }
// reset = () => {
// 	this.setState({ counter: 0 })
// }
// 	render() {
// 		const { counter } = this.state
// 		return (
// 			<StyledCounter>
// 				<Flex gap='20'>
// 					<input onChange={this.handleChangeInput} type='text' />
// 				</Flex>
// 				<CounterStyled color='red'>
// 					<span>{counter}</span>
// 				</CounterStyled>
// 				<Flex justify='center' gap='30'>
// 					<StyledButton onClick={this.decrement}>minus</StyledButton>
// 					<StyledButton onClick={this.reset}>reset</StyledButton>
// 					<StyledButton onClick={this.increment}>plus</StyledButton>
// 				</Flex>
// 			</StyledCounter>
// 		)
// 	}
// }
