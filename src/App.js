import AuthProvider from './HOC/AuthProvider'
import RoutesList from './components/Routes'

export const App = () => {
	return (
		<AuthProvider>
			<RoutesList />
		</AuthProvider>
	)
}
