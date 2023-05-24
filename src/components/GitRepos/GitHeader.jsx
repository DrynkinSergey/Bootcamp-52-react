import React, { useEffect, useRef, useState } from 'react'
import { StyledHeader } from './GitRepos.styled'

export const GitHeader = ({ onChangeQuery }) => {
	const [search, setSearch] = useState('')
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	const onSubmit = e => {
		e.preventDefault()
		// const input = document.querySelector('#input')
		console.log(inputRef)
		onChangeQuery(search)
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
