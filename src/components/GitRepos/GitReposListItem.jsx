import React, { useState } from 'react'
import { StyledCard, StyledRepoImg } from './GitRepos.styled'
import Modal from '../Modal/Modal'

export class GitReposListItem extends React.Component {
	state = {
		isOpen: false,
	}
	toggleModal = () => {
		// this.setState(prevState => ({ isOpen: !prevState.isOpen }))
		this.setState({ isOpen: !this.state.isOpen })
	}
	render() {
		const { name, desc, language, url, author, stars, link } = this.props
		return (
			<StyledCard>
				<StyledRepoImg onClick={this.toggleModal}>
					<img src={url} alt='userImg' />
				</StyledRepoImg>
				<div>
					<h1>Name: {name}</h1>
					<h3>Author: {author}</h3>
					<h3>Language: {language}</h3>
					<h3>Description: {desc}</h3>
				</div>
				<div>
					<span>{stars} stars</span>
				</div>
				<div>
					<a href={link}>link</a>
				</div>
				{this.state.isOpen && (
					<Modal onClose={this.toggleModal}>
						<img src={url} alt='' />
					</Modal>
				)}
			</StyledCard>
		)
	}
}

// export const GitReposListItem = ({
// 	name,
// 	desc,
// 	language,
// 	url,
// 	author,
// 	stars,
// 	link,
// }) => {
// 	const [isOpen, setIsOpen] = useState(false)

// 	const toggleModal = () => {
// 		// this.setState(prevState => ({ isOpen: !prevState.isOpen }))
// 		setIsOpen(!isOpen)
// 	}
// 	return (
// 		<StyledCard>
// 			<StyledRepoImg onClick={toggleModal}>
// 				<img src={url} alt='userImg' />
// 			</StyledRepoImg>
// 			<div>
// 				<h1>Name: {name}</h1>
// 				<h3>Author: {author}</h3>
// 				<h3>Language: {language}</h3>
// 				<h3>Description: {desc}</h3>
// 			</div>
// 			<div>
// 				<span>{stars} stars</span>
// 			</div>
// 			<div>
// 				<a href={link}>link</a>
// 			</div>
// 			{isOpen && (
// 				<Modal onClose={toggleModal}>
// 					<img src={url} alt='' />
// 				</Modal>
// 			)}
// 		</StyledCard>
// 	)
// }
