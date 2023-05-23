import React, { Component } from 'react'
import { CounterStyled, StyledButton, StyledCounter } from './Counter.styled'
import { Flex } from '../../Global.styled'

export class Counter extends React.Component {
	state = {
		counter: 0,
		step: 1,
	}

	increment = () => {
		this.setState(prevState => ({
			counter: prevState.counter + this.state.step,
		}))
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
