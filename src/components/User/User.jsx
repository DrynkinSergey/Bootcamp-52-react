import React from 'react'
import PropTypes from 'prop-types'
import css from './User.module.scss'
import { StyledFirstName, StyledUserItem } from './User.styled'
import { StyledButton } from '../../App'
export const User = props => {
	const { firstName, lastName, age, gender, email, image, phone, id } = props

	return (
		<StyledUserItem gender={gender} id={id}>
			<div>
				<img src={image} alt='userImg' />
			</div>
			<StyledFirstName>{firstName}</StyledFirstName>
			<h3>{lastName}</h3>
			<div className={css.userExtraInfo}>
				<h4>Email:{email}</h4>
				<h4>Phone: {phone}</h4>
				<h4>Gender: {gender}</h4>
				<h4>Age: {age}</h4>
			</div>
			<StyledButton size='100px' dashed>
				Delete
			</StyledButton>
		</StyledUserItem>
	)
}

User.propTypes = {
	id: PropTypes.number,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string,
	age: PropTypes.number.isRequired,
	gender: PropTypes.string,
	email: PropTypes.string,
	image: PropTypes.string,
	phone: PropTypes.string,
}
