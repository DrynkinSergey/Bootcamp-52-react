import React from 'react'

export const FilterForm = ({ setFiltered }) => {
	const submit = e => {
		e.preventDefault()
		const filter = e.target.filter.value
		setFiltered(filter)
	}
	return (
		<form onSubmit={submit}>
			<input name='filter' type='text' />
			<button>Filter</button>
		</form>
	)
}
