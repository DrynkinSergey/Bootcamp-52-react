import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../LoginForm/LoginForm.styled'
const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = () => {
	return (
		<Filters>
			<h1>Filters</h1>
			<Flex column>
				<StyledInput type='text' />
				<label htmlFor=''>
					<input type='checkbox' />
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex>
				{skilsList.map(skill => (
					<label key={skill}>
						<input name='skill' type='radio' value={skill} />
						<span> {skill}</span>
					</label>
				))}
			</Flex>
		</Filters>
	)
}
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #3a56f6;
	font-weight: bold;
	font-size: 1.5rem;
	color: white;
	margin-bottom: 20px;
`
const Flex = styled.div`
	display: flex;
	padding: 20px 15px;
	gap: 10px;
	flex-direction: ${props => (props.column ? 'column' : 'row')};
`
