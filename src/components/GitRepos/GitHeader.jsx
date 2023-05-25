import React, { useEffect, useRef, useState } from 'react'
import { StyledHeader } from './GitRepos.styled'
import { SET_QUERY } from '../../services/constants'

export const GitHeader = ({ dispatch }) => {
	const [search, setSearch] = useState('')
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	const onSubmit = e => {
		e.preventDefault()
		console.log(inputRef)
		dispatch({ type: SET_QUERY, payload: inputRef.current.value })
	}

	return (
		<StyledHeader>
			<h1>Welcome to GitRepos</h1>

			<form onSubmit={onSubmit}>
				<input
					ref={inputRef}
					type='text'
					id='input'
					value={search}
					onChange={e => setSearch(e.target.value)}
					name='search'
				/>
				<button>Search</button>
			</form>
		</StyledHeader>
	)
}
