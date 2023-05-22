import React from 'react'
import { StyledHeader } from './GitRepos.styled'

export const GitHeader = ({ setSearchStr }) => {
	const onSubmit = e => {
		e.preventDefault()
		setSearchStr(e.target.search.value)
	}
	return (
		<StyledHeader>
			<h1>Welcome to GitRepos</h1>
			<form onSubmit={onSubmit}>
				<input type='text' name='search' />
				<button>Search</button>
			</form>
		</StyledHeader>
	)
}
