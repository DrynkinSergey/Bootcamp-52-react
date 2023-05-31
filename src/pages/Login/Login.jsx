import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Login = () => {
	const { login } = useAuth()
	const location = useLocation()
	console.log(location)
	const navigate = useNavigate()
	const submit = e => {
		e.preventDefault()
		const inputValue = e.target.userName.value
		login(inputValue, () => navigate(location.state?.from ?? '/'))
	}
	return (
		<>
			<h1>Login </h1>
			<form onSubmit={submit}>
				<input type='text' name='userName' />
				<button>Login</button>
			</form>
		</>
	)
}

export default Login
