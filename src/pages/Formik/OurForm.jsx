import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
export const OurForm = () => {
	const dispatch = useDispatch()
	// const validate = values => {
	// 	const errors = {}

	// 	if (!values.username) {
	// 		errors.username = 'Required'
	// 	} else if (values.username.length > 14) {
	// 		errors.username = 'Must be less then 14 characters'
	// 	}

	// 	return errors
	// }

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			avatar: '',
			password: '',
		},
		onSubmit: values => {
			dispatch({ type: 'FORMIK', payload: values })
			console.log(values)
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.max(14, 'Must be less then 14 characters')
				.required('Required input'),
			email: Yup.string().email('Invalid email'),
			avatar: Yup.string().url('Input must be url'),
		}),
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
					onBlur={formik.handleBlur}
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
				{formik.errors.email ? <div>{formik.errors.email}</div> : null}

				<input
					type='password'
					name='password'
					placeholder='password'
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				<input
					type='text'
					name='avatar'
					placeholder='avatar'
					value={formik.values.avatar}
					onChange={formik.handleChange}
				/>
				{formik.errors.avatar ? <div>{formik.errors.avatar}</div> : null}

				<button className='bg-white' type='submit'>
					Submit
				</button>
			</form>
		</div>
	)
}
