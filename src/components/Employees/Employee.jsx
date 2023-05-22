import React from 'react'
import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/employee.json'
import Modal from '../Modal/Modal'

export class Employees extends React.Component {
	state = {
		users: userData,
		filter: '',
		isAvailable: false,
		currentSkill: 'all',
	}

	componentDidMount() {
		console.log('Компонент створився і існує')
		const users = JSON.parse(window.localStorage.getItem('users'))
		users.length && this.setState({ users })
	}
	componentDidUpdate(prevProps, prevState) {
		// console.log(`До `, prevState)
		// console.log('Після', this.state)
		if (prevState.users.length !== this.state.users.length) {
			console.log('Users was changed')
			window.localStorage.setItem('users', JSON.stringify(this.state.users))
		}
		if (this.state.users.length === 5) {
			console.log('В тебе залишилось 5 юзерів')
		}
	}

	handleDeleteUser = id => {
		this.setState(prevState => ({
			users: prevState.users.filter(user => user.id !== id),
		}))
	}
	handleSetFilter = filter => {
		this.setState({ filter })
	}
	handleChangeAvailable = () => {
		this.setState(prevState => ({ isAvailable: !prevState.isAvailable }))
	}

	handleChangeSkill = skill => {
		this.setState({ currentSkill: skill })
	}
	getFilteredData = () => {
		const { users, filter, isAvailable, currentSkill } = this.state
		return users
			.filter(
				user =>
					user.name.toLowerCase().includes(filter.toLowerCase()) ||
					user.email.toLowerCase().includes(filter.toLowerCase())
			)
			.filter(user => (!isAvailable ? user : user.isOpenToWork))
			.filter(user =>
				currentSkill === 'all' ? user : user.skills.includes(currentSkill)
			)
	}

	render() {
		const { isAvailable, currentSkill } = this.state
		const filteredData = this.getFilteredData()
		return (
			<div>
				<EmployeesFilter
					currentSkill={currentSkill}
					isAvailable={isAvailable}
					onChangeSkill={this.handleChangeSkill}
					onChangeCheckbox={this.handleChangeAvailable}
					onFilter={this.handleSetFilter}
				/>

				<EmployeeList users={filteredData} onDelete={this.handleDeleteUser} />
			</div>
		)
	}
}
