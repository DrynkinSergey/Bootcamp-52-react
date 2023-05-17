import React from 'react'
import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
export const Employees = () => {
	return (
		<div>
			<EmployeesFilter />
			<EmployeeList />
		</div>
	)
}
