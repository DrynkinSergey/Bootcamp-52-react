import React, { Component } from 'react'
import { CounterStyled, StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../Global.styled'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
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
		// this.setState({ counter: this.state.counter + this.state.step })
		// this.setState({ counter: this.state.counter + this.state.step })
		// this.setState({ counter: this.state.counter + this.state.step })
		this.setState(prevState => ({
			counter: prevState.counter + this.state.step,
		}))
		this.props.handleChangeColor()
	}
	decrement = () => {
		this.setState(prevState => ({
			counter: prevState.counter - this.state.step,
		}))
	}
	handleChangeInput = ({ target }) => {
		this.setState({ step: +target.value })
	}
	reset = () => {
		this.setState({ counter: 0 })
		// console.log(+'12')
		// console.log(Number('12'))
	}
	render() {
		const { counter } = this.state
		return (
			<StyledCounter>
				<Flex gap='20'>
					<input onChange={this.handleChangeInput} type='text' />
				</Flex>
				<CounterStyled color='red'>
					<span>{counter}</span>
				</CounterStyled>
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
