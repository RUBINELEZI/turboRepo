import styles from './employeeselect.module.scss'

const EmployeeSelect = ({ employeeManager }) => {
  const { employees, employee, setEmployee } = employeeManager
  if (!employees) {
    return null
  }

  const onSelectChange = (ev) => {
    setEmployee(ev.target.value)
  }

  return (
    <div className={styles.employeeSelect}>
      <select value={employee} onChange={onSelectChange}>
        <option value="any">any employee</option>
        {employees.map((employee) => (
          <option key={employee._id} value={employee._id}>
            {employee.firstName} {employee.lastName}
          </option>
        ))}
      </select>
    </div>
  )
}

export default EmployeeSelect
