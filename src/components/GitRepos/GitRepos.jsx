import React, { useEffect, useRef, useState } from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { StyledButton } from '../Counter/Counter.styled'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { getRepos } from '../../services/gitAPI'
import { LoaderSpinner } from './LoaderSpinner'
import { Error } from './Error'
const STATUS = {
	idle: 'loading',
	pending: 'pending',
	fulfilled: 'fulfilled',
	rejected: 'rejected',
}

export const GitRepos = () => {
	const myRef = useRef(null)
	const [repos, setRepos] = useState([])
	const [query, setQuery] = useState('React')
	const [page, setPage] = useState(1)
	const [status, setStatus] = useState('idle')

	useEffect(() => {
		fetchData()
		console.log(myRef)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, query])

	const fetchData = () => {
		const { pending, fulfilled, rejected } = STATUS
		setStatus(pending)
		getRepos(query, page)
			.then(res => {
				setRepos(res.data.items)
				setStatus(fulfilled)
				toast.success('Repos is ready!')
			})
			.catch(e => {
				toast.error('Smth went wrong!')
				setStatus(rejected)
			})
	}

	const nextPage = () => {
		setPage(prev => prev + 1)
	}
	const prevPage = () => {
		setPage(prev => prev - 1)
	}

	const handleChangeQuery = query => {
		setQuery(query)
	}

	return (
		<div>
			<GitHeader onChangeQuery={handleChangeQuery} />
			<StyledBtns>
				<StyledButton ref={myRef} border='2px' onClick={prevPage}>
					Prev Page
				</StyledButton>
				<StyledButton border='2px' onClick={nextPage}>
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
