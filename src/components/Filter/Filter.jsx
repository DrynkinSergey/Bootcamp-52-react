import React, { useContext } from 'react'
import { TodoContext } from '../../HOC/ContextProvider'

export const Filter = () => {
	const { setFilter } = useContext(TodoContext)
	return (
		<div>
			<button onClick={() => setFilter('all')}>All</button>
			<button onClick={() => setFilter('active')}>Active</button>
			<button onClick={() => setFilter('completed')}>Completed</button>
		</div>
	)
}
