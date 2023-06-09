import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/Auth/operations'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchTodosThunk } from '../redux/Todo/operations'

export const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()
	console.log(location)
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		const credentials = {
			email,
			password,
		}

		dispatch(loginThunk(credentials))
			.unwrap()
			.then(() => {
				navigate(location.state?.from ?? '/tasks')
				toast.success('Wellcome back')
			})
			.catch(() => toast.error('Try again'))
		// dispatch(fetchTodosThunk())

		form.reset()
	}

	return (
		<div className='flex justify-center items-center h-screen bg-darkMain'>
			<form
				className='flex gap-6 text-white flex-col w-1/3 p-10 border-blue-600 border-2 rounded-lg'
				onSubmit={handleSubmit}
			>
				<h1 className='text-center text-2xl'>Login Form</h1>
				<input
					className='border px-2 text-black'
					name='email'
					placeholder='Email...'
					type='text'
				/>
				<input
					className='border px-2 text-black'
					name='password'
					placeholder='Password...'
					type='password'
				/>
				<button className='border bg-blue-600 rounded-md'>Login</button>
			</form>
		</div>
	)
}
