import React, { useContext } from 'react'
import { StyledCard, StyledRepoImg } from './GitRepos.styled'
import { Modal } from '../Modal/Modal'
import { MyContext } from '../../App'
import { useToggle } from '../../hooks/useToggle'

export const GitReposListItem = ({
	name,
	desc,
	language,
	url,
	author,
	stars,
	link,
}) => {
	const { open, isOpen, close } = useToggle()

	const { product } = useContext(MyContext)

	return (
		<StyledCard>
			<StyledRepoImg onClick={open}>
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
			<h1>Product from context {product}</h1>
			{isOpen && (
				<Modal onClose={close}>
					<img src={url} alt='' />
				</Modal>
			)}
		</StyledCard>
	)
}
