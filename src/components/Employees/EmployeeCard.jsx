import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../Counter/Counter.styled'

export const EmployeeCard = ({
	id,
	name,
	email,
	bio,
	skills,
	isOpenToWork,
	onDelete,
}) => {
	return (
		<UserCard open={isOpenToWork}>
			<h3>{name}</h3>
			<h4>{email}</h4>
			<h5>{bio}</h5>
			<SkillList>
				{skills.map(skill => (
					<Skill skill={skill} key={skill}>
						{skill}
					</Skill>
				))}
			</SkillList>
			<StyledButton border size='.8rem' onClick={() => onDelete(id)}>
				Delete
			</StyledButton>
		</UserCard>
	)
}

const UserCard = styled.li`
	display: flex;
	gap: 10px;
	flex-direction: column;
	border: 3px solid;
	border-radius: 12px;
	padding: 15px;
	background-color: #3bfead;
	width: 100%;
	box-shadow: 4px 5px 2px 1px gray;
`
const SkillList = styled.ul`
	margin-bottom: 20px;
	padding: 0;
`

const Skill = styled.li`
	border: 2px solid black;

	border-radius: 12px;
	padding: 4px 9px;
	display: inline;
	color: white;
	margin-right: 10px;
	background-color: ${({ skill }) => {
		switch (skill) {
			case 'react':
				return 'blue'
			case 'vue':
				return 'green'
			case 'angular':
				return 'red'
			default:
				return 'white'
		}
	}};
`
