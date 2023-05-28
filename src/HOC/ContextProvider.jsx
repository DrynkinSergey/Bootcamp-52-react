import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const login = value => {
		setUser(value)
	}
	const logout = () => {
		setUser('')
	}
	const myContextOptions = {
		user,
		login,
		logout,
	}

	return (
		<TodoContext.Provider value={myContextOptions}>
			{children}
		</TodoContext.Provider>
	)
}

// <div> div</div>
