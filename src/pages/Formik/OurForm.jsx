import { useFormik } from 'formik'
import React from 'react'

export const OurForm = () => {
	const validate = values => {
		const errors = {}

		if (!values.username) {
			errors.username = 'Required'
		} else if (values.username.length > 14) {
			errors.username = 'Must be less then 14 characters'
		}

		return errors
	}

	const formik = useFormik({
		initialValues: {
			username: 'Alex',
			email: 'alex@mail.com',
			password: '123',
		},
		onSubmit: values => {
			console.log(values)
		},
		validate,
	})
	return (
		<div className='flex justify-center items-center h-screen'>
			<form
				onSubmit={formik.handleSubmit}
				className='flex gap-4 flex-col border-2 border-black w-2/3 px-4 py-8 bg-sky-500'
			>
				<input
					type='text'
					name='username'
					placeholder='username'
					value={formik.values.username}
					onChange={formik.handleChange}
				/>
				{formik.errors.username ? <div>{formik.errors.username}</div> : null}
				<input
					type='email'
					name='email'
					placeholder='email'
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					value={formik.values.password}
					onChange={formik.handleChange}
				/>

				<button className='bg-white' type='submit'>
					Submit
				</button>
			</form>
		</div>
	)
}
