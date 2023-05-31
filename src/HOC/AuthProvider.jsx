import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState('Test')
	const login = (userName, callback) => {
		setUser(userName)
		callback()
	}
	const logout = () => {
		setUser()
	}
	const value = { user, login, logout }
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
