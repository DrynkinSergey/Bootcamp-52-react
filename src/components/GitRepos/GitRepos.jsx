import React, { Component } from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { StyledButton } from '../Counter/Counter.styled'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { getRepos } from '../../services/gitAPI'
import { LoaderSpinner } from './LoaderSpinner'
import { Error } from './Error'
import Modal from '../Modal/Modal'
const STATUS = {
	idle: 'loading',
	pending: 'pending',
	fulfilled: 'fulfilled',
	rejected: 'rejected',
}

export class GitRepos extends Component {
	state = {
		repos: [],
		query: 'React',
		page: 1,
		// isLoading: false,
		status: 'idle',
		pictureUrl: '',
		isOpen: false,
		// 'idle' 'pending' 'fulfilled' 'rejected'
	}
	componentDidMount() {
		this.fetchData()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query) {
			this.fetchData()
		}
		if (prevState.page !== this.state.page) {
			this.fetchData()
		}
	}
	fetchData = () => {
		const { query, page } = this.state
		const { pending, fulfilled, rejected } = STATUS

		this.setState({ status: pending })
		setTimeout(() => {
			getRepos(query, page)
				.then(res => {
					this.setState({ repos: res.data.items, status: fulfilled })
					toast.success('Repos is ready!')
				})
				.catch(e => {
					toast.error('Smth went wrong!')
					this.setState({ status: rejected })
				})
		}, 1500)
	}
	nextPage = () => {
		this.setState(prevState => ({ page: prevState.page + 1 }))
	}
	prevPage = () => {
		this.setState(prevState => ({ page: prevState.page - 1 }))
	}

	handleChangeQuery = query => {
		this.setState({ query })
	}

	getCurrentPicture = pictureUrl => {
		this.setState({ pictureUrl })
		this.toggleModal()
	}

	toggleModal = () => {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }))
	}

	render() {
		const { status, isOpen, pictureUrl } = this.state
		const { pending, fulfilled, rejected } = STATUS
		return (
			<div>
				<GitHeader onChangeQuery={this.handleChangeQuery} />
				<StyledBtns>
					<StyledButton border='2px' onClick={this.prevPage}>
						Prev Page
					</StyledButton>
					<StyledButton border='2px' onClick={this.nextPage}>
						Next Page
					</StyledButton>
				</StyledBtns>
				{status === pending && <LoaderSpinner />}
				{status === fulfilled && (
					<GitReposList
						getCurrentPicture={this.getCurrentPicture}
						repos={this.state.repos}
					/>
				)}
				{status === rejected && <Error />}

				{isOpen && (
					<Modal onClose={this.toggleModal}>
						<img src={pictureUrl} alt='' />
					</Modal>
				)}
			</div>
		)
	}
}

const StyledBtns = styled.div`
	display: flex;
	justify-content: center;
	gap: 20px;
`
