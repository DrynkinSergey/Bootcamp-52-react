import React from 'react'
import { StyledCard, StyledRepoImg } from './GitRepos.styled'

export const GitReposListItem = ({
	name,
	desc,
	language,
	url,
	author,
	stars,
	link,
}) => {
	return (
		<StyledCard>
			<StyledRepoImg>
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
		</StyledCard>
	)
}
