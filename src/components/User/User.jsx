import React from 'react'
import PropTypes from 'prop-types'

import { UserStyles } from './User.styled'

export const User = ({
	index,
	isOnline,
	title,
	avatar,
	location,
	username,
	tag,
	stats,
}) => {
	return (
		<UserStyles.Card cardIndex={index}>
			{title && <h1>User card: {title}</h1>}
			<img style={{ height: '200px' }} src={avatar} alt='' />

			<UserStyles.NameStyled>
				{' '}
				<UserStyles.Status status={isOnline}></UserStyles.Status>
				<span>Name:</span> {username}
			</UserStyles.NameStyled>
			<UserStyles.Location>Location: {location}</UserStyles.Location>
			<h2>Tag: {tag}</h2>
			<h3>
				Stats: {stats.followers} | {stats.views} | {stats.likes}
			</h3>
			<h2>
				{stats.followers > 5000 ? 'This person is star' : 'This is common'}
			</h2>
		</UserStyles.Card>
	)
}

User.propTypes = {
	index: PropTypes.number,
	isOnline: PropTypes.bool,
	title: PropTypes.string,
	avatar: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}),
}
