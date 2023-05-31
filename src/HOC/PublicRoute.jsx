import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const { user } = useAuth()
	if (user) {
		return <Navigate to='/' />
	}
	return children
}

export default PublicRoute
