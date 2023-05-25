import React, { useContext } from 'react'
import { TodoContext } from '../../../../context/TodoContext'

export const Filter = () => {
	const { setActiveFilter } = useContext(TodoContext)

	return (
		<div>
			<button onClick={() => setActiveFilter('all')}>All</button>
			<button onClick={() => setActiveFilter('completed')}>Completed</button>
			<button onClick={() => setActiveFilter('active')}>Active</button>
		</div>
	)
}
