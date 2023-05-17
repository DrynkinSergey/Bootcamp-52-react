import React from 'react'
import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import usersData from '../../assets/employee.json'
export const Employees = () => {
	return (
		<div>
			<EmployeesFilter />
			<EmployeeList users={usersData} />
		</div>
	)
}
