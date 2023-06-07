import React from 'react'

export const FilterForm = ({ handleFilterChange }) => {
	const submit = e => {
		e.preventDefault()
		const filter = e.target.filter.value
		handleFilterChange(filter)
	}

	return (
		<form onSubmit={submit}>
			<input name='filter' type='text' />
			<button>Filter</button>
		</form>
	)
}
