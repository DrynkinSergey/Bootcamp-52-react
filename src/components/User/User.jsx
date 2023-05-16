import React from 'react'
import PropTypes from 'prop-types'
import s from './User.module.css'
export const User = ({ title, avatar, location, username, tag, stats }) => {
	return (
		<div className={s.card}>
			{title && <h1>User card: {title}</h1>}
			<img style={{ height: '200px' }} src={avatar} alt='' />
			<h1 className={s.title}>Name: {username}</h1>
			<h2 className='title'>Location: {location}</h2>
			<h2 className={s.tag}>Tag: {tag}</h2>
			<h3>
				Stats: {stats.followers} | {stats.views} | {stats.likes}
			</h3>
			<h2>
				{stats.followers > 5000 ? 'This person is star' : 'This is common'}
			</h2>
		</div>
	)
}

User.propTypes = {
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
