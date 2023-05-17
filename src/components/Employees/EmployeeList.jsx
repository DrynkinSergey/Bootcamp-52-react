import React from 'react'
import styled from 'styled-components'
import { EmployeeCard } from './EmployeeCard'

export const EmployeeList = ({
	users = [
		{
			id: 1,
			name: 'Leanne Graham',
			email: 'Sincere@april.biz',
			bio: 'Assumenda harum mollitia neque, officiis veniam repellat sapiente delectus aspernatur',
			skills: ['react', 'vue'],
			isOpenToWork: false,
		},
	],
}) => {
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
