import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/selectors'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const location = useLocation()
	if (!isLoggedIn) {
		return <Navigate to='/login' state={{ from: location.pathname }} />
	}
	return children
}
