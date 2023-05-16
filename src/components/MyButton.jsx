import React from 'react'

export const MyButton = ({ title = 'button' }) => {
	return (
		<button style={{ backgroundColor: 'green', color: 'white' }}>
			{title}
		</button>
	)
}
