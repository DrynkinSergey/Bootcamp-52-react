import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState()
	const login = (userName, callback) => {
		setUser(userName)
		callback()
	}
	const logout = callback => {
		setUser()
		callback()
	}
	const value = { user, login, logout }
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
