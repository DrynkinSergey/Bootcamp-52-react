import React from 'react'
import { StyledHeader } from './GitRepos.styled'

export const GitHeader = ({ onChangeQuery }) => {
	const onSubmit = e => {
		e.preventDefault()
		const form = e.target
		onChangeQuery(form.search.value)
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
