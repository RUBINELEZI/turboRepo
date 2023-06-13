import React from 'react'
import { useQuery } from '@tanstack/react-query'
import queryString from 'query-string'
import client from '@/lib/client'
import FinishBookingScreen from '@/screens/FinishBooking'

const FinishBookingPage = (props) => {
  const { session, status, employeeId } = props
  const { data: employee } = useQuery(['employee', employeeId], () =>
    client.employees.one({ id: employeeId })
  )

  if (!employee) {
    return null
  }

  return <FinishBookingScreen {...props} employee={employee} />
}

export async function getServerSideProps({ req, res, params }) {
  const { employee, salon, slot } = queryString.parse(
    req.url.replace(/.+\?/, ''),
    true
  )

  return { props: { employeeId: employee, salon, slot } }
}

export default FinishBookingPage
