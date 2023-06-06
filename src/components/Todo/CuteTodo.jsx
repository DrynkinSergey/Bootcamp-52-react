import React, { useEffect, useMemo } from 'react'
import bg from './../../assets/images/bg-desktop-dark.jpg'
import bgMobile from './../../assets/images/bg-mobile-dark.jpg'
import { AddForm } from './AddForm'
import { TodoList } from './todoList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodosThunk } from '../../redux/Todo/operations'
import { selectTheme } from '../../redux/Todo/selectors'
import { toggleTheme } from '../../redux/themeSlice'

export const CuteTodo = () => {
	const dispatch = useDispatch()
	const theme = useSelector(selectTheme)
	// useEffect(() => {
	// 	dispatch(fetchTodosThunk())
	// }, [dispatch])
	const bgImage = useMemo(
		() => (
			<>
				<img
					className='absolute hidden md:block w-full h-1/2 object-cover left-0 z-1'
					src={bg}
					alt='bgImage'
				/>
				<img
					className='fixed md:hidden block w-full h-1/2 object-cover left-0 z-1'
					src={bgMobile}
					alt='bgImage'
				/>
			</>
		),

		[]
	)
	return (
		<div
			className={`${
				theme === 'dark' ? ' bg-darkVeryBG ' : 'bg-white'
			} min-h-screen px-6 text-lg transition-all duration-300`}
		>
			{bgImage}
			<div className='relative z-2 flex w-full  sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-2/4 flex-col mx-auto py-40 '>
				<div className='font-extrabold text-2xl text-white/80 flex justify-between items-center'>
					<h1>TODO:</h1>
					<button onClick={() => dispatch(toggleTheme())}>{theme}</button>
				</div>
				<AddForm />
				<TodoList />
			</div>
		</div>
	)
}
