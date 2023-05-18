import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../LoginForm/LoginForm.styled'

const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = ({
	onFilter,
	onChangeCheckbox,
	onChangeSkill,
	currentSkill,
	isAvailable,
}) => {
	return (
		<Filters>
			<h1>Filters</h1>
			<Flex column>
				<StyledInput type='text' onChange={e => onFilter(e.target.value)} />
				<label htmlFor=''>
					<input
						type='checkbox'
						checked={isAvailable}
						onChange={onChangeCheckbox}
					/>
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							name='radioButtonName'
							type='radio'
							value={radioButtonName}
							checked={radioButtonName === currentSkill}
							onChange={() => onChangeSkill(radioButtonName)}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</Flex>
			{/* <Flex>
				<label>
					<input
						name='radioBtn'
						type='radio'
						value='all'
						checked={'all' === currentSkill}
						onChange={() => onChangeSkill('all')}
					/>
					<span> all</span>
				</label>
				<label>
					<input
						name='radioBtn'
						type='radio'
						value='all'
						checked={'all' === currentSkill}
						onChange={() => onChangeSkill('all')}
					/>
					<span> all</span>
				</label>
			</Flex> */}
		</Filters>
	)
}
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #cbd3ff;
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 20px;
`
const Flex = styled.div`
	display: flex;
	padding: 20px 15px;
	gap: 10px;
	flex-direction: ${props => (props.column ? 'column' : 'row')};
`
