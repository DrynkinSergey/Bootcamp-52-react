import { useDispatch } from 'react-redux'
import { addTodoThunk, deleteTodoThunk } from '../../redux/Todo/operations'

export const AddForm = ({ onSubmit }) => {
	// const [addTodo, { isLoading, isError }] = useAddTodoMutation()
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		if (e.target.addTodo.value.trim()) {
			const title = e.target.addTodo.value.trim()
			dispatch(addTodoThunk(title))
			e.target.reset()
			e.target.focus()
		}
	}
	return (
		<form
			className='shadow-mainDark flex justify-center w-full mb-8 font-josefin bg-darkMain list-none px-4 py-4 rounded-md border-b-white/30  text-white/80'
			onSubmit={handleSubmit}
		>
			<input
				autoComplete='off'
				placeholder='Add some todo....'
				className=' px-4  w-2/3 rounded-md mr-4 text-black'
				name='addTodo'
				type='text'
			/>
			<button className='border-[1px] border-white/10 px-4 rounded-md'>
				+
			</button>
		</form>
	)
}
