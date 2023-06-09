import { useDispatch, useSelector } from 'react-redux'
import {
	selectFilter,
	selectUncompletedTodos,
} from '../../redux/Todo/selectors'
import { setFilter } from '../../redux/Todo/filterSlice'

export const Filter = () => {
	const filter = useSelector(selectFilter)
	const uncompletedTodos = useSelector(selectUncompletedTodos)
	const dispatch = useDispatch()

	const setClasses = type =>
		filter === type ? `${classes} text-blue-600` : classes
	const classes = 'hover:text-white cursor-pointer'

	return (
		<li className='list-none  py-4 flex-col md:flex-row  text-white/40 flex justify-between px-8 items-center'>
			{uncompletedTodos === 0 ? (
				<span className='md:order-1 order-1'>All is complete!</span>
			) : (
				<span className='md:order-1 order-1'>
					<span className='text-blue-500'>{uncompletedTodos}</span> items left
				</span>
			)}
			<div className='flex gap-4 order-3 mt-4 md:mt-0  md:order-2'>
				<span
					onClick={() => dispatch(setFilter('All'))}
					className={setClasses('All')}
				>
					All
				</span>
				<span
					onClick={() => dispatch(setFilter('Active'))}
					className={setClasses('Active')}
				>
					Active
				</span>
				<span
					onClick={() => dispatch(setFilter('Completed'))}
					className={setClasses('Completed')}
				>
					Completed
				</span>
			</div>
			<span className={`${classes} order-2 sm:order-2`}>Clear Completed</span>
		</li>
	)
}
