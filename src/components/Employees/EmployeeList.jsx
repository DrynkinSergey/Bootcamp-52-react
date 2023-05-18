import React from 'react'
import styled from 'styled-components'
import { EmployeeCard } from './EmployeeCard'

export const EmployeeList = ({ users = [], onDelete }) => {
	if (!users.length) {
		return <h1>Немає юзерів для роботи</h1>
	}

	return (
		<UserList>
			{users.map(({ id, name, bio, skills, isOpenToWork, email }) => (
				<EmployeeCard
					key={id}
					id={id}
					name={name}
					bio={bio}
					skills={skills}
					isOpenToWork={isOpenToWork}
					email={email}
					onDelete={onDelete}
				/>
			))}
		</UserList>
	)
}
const UserList = styled.ul`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
	gap: 10px;
`
