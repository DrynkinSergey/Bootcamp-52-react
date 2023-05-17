import React, { Component } from 'react'
import { StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../Global.styled'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 4,
	}

	// {
	// 	syntheticEvent
	// 	btnPlus : () => {},
	// 	input : () => {},
	// 	checkbox: () => {},
	// }

	//document.querySelector('.btn').addEventListener('click', ()=> {})
	//document.querySelector('.btn').removeEventListener('click', ()=> {})
	increment = () => {
		this.setState({ counter: this.state.counter + this.state.step })
	}
	decrement = () => {
		this.setState({ counter: this.state.counter - 1 })
	}
	reset = () => {
		this.setState({ counter: 0 })
	}
	render() {
		const { counter } = this.state
		return (
			<StyledCounter>
				<h1>{counter}</h1>
				<Flex justify='center' gap='30'>
					<StyledButton onClick={this.decrement}>minus</StyledButton>
					<StyledButton onClick={this.reset}>reset</StyledButton>
					<StyledButton onClick={this.increment}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		)
	}
}

// export const Counter = () => {
// 	return (
// 		<StyledCounter>
// 			<h1>{0}</h1>
// 			<Flex justify='center' gap='30'>
// 				<StyledButton>minus</StyledButton>
// 				<StyledButton>reset</StyledButton>
// 				<StyledButton>plus</StyledButton>
// 			</Flex>
// 		</StyledCounter>
// 	)
// }
