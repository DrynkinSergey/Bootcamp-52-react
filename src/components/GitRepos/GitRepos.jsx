import React, { Component } from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import axios from 'axios'

export class GitRepos extends Component {
	state = {
		repos: [],
		searchStr: 'React',
	}
	componentDidMount() {
		axios
			.get(
				`https://api.github.com/search/repositories?q=${this.state.searchStr}&per_page=5&page=3`
			)
			.then(res => this.setState({ repos: res.data.items }))
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchStr !== this.state.searchStr) {
			axios
				.get(
					`https://api.github.com/search/repositories?q=${this.state.searchStr}&per_page=5&page=3`
				)
				.then(res => this.setState({ repos: res.data.items }))
		}
	}
	setSearchStr = searchStr => {
		this.setState({ searchStr })
	}
	render() {
		return (
			<div>
				<GitHeader setSearchStr={this.setSearchStr} />
				<GitReposList repos={this.state.repos} />
			</div>
		)
	}
}
