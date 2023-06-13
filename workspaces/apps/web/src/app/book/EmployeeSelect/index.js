'use client'
import { useState } from 'react'
import styles from './employeeselect.module.scss'

const EmployeeSelect = ({ employees }) => {
  const [employee, setEmployee] = useState(employees[0].id)

  const onSelectChange = ev => {
    setEmployee(ev.target.value)
  }

  return (
    <div className={styles.employeeSelect}>
      <select value={employee} onChange={onSelectChange}>
        <option value="any">any employee</option>
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>
            {employee.firstName} {employee.lastName}
          </option>
        ))}
      </select>
    </div>
  )
}

export default EmployeeSelect
