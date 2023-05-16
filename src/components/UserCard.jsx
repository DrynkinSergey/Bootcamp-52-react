import React from 'react'

export const UserCard = props => {
	return (
		<div>
			<h1>User card</h1>
			<h3>{props.user.name}</h3>
			<h3>{props.user.surname}</h3>
		</div>
	)
}
