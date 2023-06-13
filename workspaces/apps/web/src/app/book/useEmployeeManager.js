'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const useEmployeeManager = (salonName, selectedDate) => {
  const { NEXT_PUBLIC_API_URL } = process.env
  console.log(process.env)
  console.log({ NEXT_PUBLIC_API_URL })
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
