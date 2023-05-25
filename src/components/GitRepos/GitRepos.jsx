import React, {
	useCallback,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { StyledButton } from '../Counter/Counter.styled'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { getRepos } from '../../services/gitAPI'
import { LoaderSpinner } from './LoaderSpinner'
import { Error } from './Error'
import {
	GET_REPOS,
	SET_PAGE,
	SET_QUERY,
	SET_STATUS,
} from '../../services/constants'
const STATUS = {
	idle: 'loading',
	pending: 'pending',
	fulfilled: 'fulfilled',
	rejected: 'rejected',
}

export const GitRepos = () => {
	const myRef = useRef(null)
	// const [repos, setRepos] = useState([])
	// const [query, setQuery] = useState('React')
	// const [page, setPage] = useState(1)
	// const [status, setStatus] = useState('idle')

	const initialState = {
		repos: [],
		query: 'React',
		page: 1,
		status: 'idle',
		error: null,
	}

	const reposReducer = (state, action) => {
		console.log(action)
		switch (action.type) {
			case GET_REPOS:
				return {
					...state,
					repos: action.payload,
				}
			case SET_STATUS:
				return {
					...state,
					status: action.payload,
				}
			case SET_QUERY:
				return {
					...state,
					query: action.payload,
				}
			case SET_PAGE:
				return {
					...state,
					page: state.page + action.payload,
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reposReducer, initialState)
	const { page, query, repos, status } = state

	const fetchData = useCallback(() => {
		const { pending, fulfilled, rejected } = STATUS
		// setStatus(pending)
		dispatch({ type: SET_STATUS, payload: pending })

		getRepos(query, page)
			.then(res => {
				// setRepos(res.data.items)
				dispatch({ type: GET_REPOS, payload: res.data.items })
				dispatch({ type: SET_STATUS, payload: fulfilled })
				// setStatus(fulfilled)
				toast.success('Repos is ready!')
			})
			.catch(e => {
				toast.error('Smth went wrong!')
				// setStatus(rejected)
				dispatch({ type: SET_STATUS, payload: rejected })
			})
	}, [page, query])

	// xd01rx1
	// dr01x1
	// dr01x1 !== xd01rx1
	useEffect(() => {
		fetchData()
	}, [page, query, fetchData])

	// const nextPage = () => {
	// 	setPage(prev => prev + 1)
	// }
	// const prevPage = () => {
	// 	setPage(prev => prev - 1)
	// }

	// const handleChangeQuery = query => {
	// 	setQuery(query)
	// }

	return (
		<div>
			<GitHeader dispatch={dispatch} />
			<StyledBtns>
				<StyledButton
					ref={myRef}
					border='2px'
					onClick={() => dispatch({ type: SET_PAGE, payload: -1 })}
				>
					Prev Page
				</StyledButton>
				<StyledButton
					border='2px'
					onClick={() => dispatch({ type: SET_PAGE, payload: 1 })}
				>
					Next Page
				</StyledButton>
			</StyledBtns>
			{status === STATUS.pending && <LoaderSpinner />}
			{status === STATUS.fulfilled && <GitReposList repos={repos} />}
			{status === STATUS.rejected && <Error />}
		</div>
	)
}

const StyledBtns = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
`
