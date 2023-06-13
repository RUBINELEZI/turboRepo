import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import client from '@/lib/client'

const useEmployeeManager = (salonName, selectedDate) => {
  const [employee, setEmployee] = useState('any')

  const { data: employees } = useQuery(['employees', salonName], () =>
    client.employees.all({ salon: salonName }).then((employees) => {
      setEmployee(employees[0]._id)
      return employees
    })
  )

  return { employees, employee, setEmployee }
}

export default useEmployeeManager
