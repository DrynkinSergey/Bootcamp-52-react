import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const PrivateRoute = ({ children }) => {
	const { user } = useAuth()
	const location = useLocation()
	if (!user) {
		return (
			<Navigate
				to='/login'
				state={{
					from: location.pathname,
				}}
			/>
		)
	}
	return children
}

export default PrivateRoute
