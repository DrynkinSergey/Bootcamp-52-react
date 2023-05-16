import React from 'react'

export const User = ({ avatar, location, username, tag, stats }) => {
	return (
		<div>
			<img style={{ height: '200px' }} src={avatar} alt='' />
			<h1>Name: {username}</h1>
			<h2>Location: {location}</h2>
			<h2>Tag: {tag}</h2>
			<h3>
				Stats: {stats.followers} | {stats.views} | {stats.likes}
			</h3>
		</div>
	)
}
