'use client'
import { useRef, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import useEmployeeManager from './useEmployeeManager'

const useBooking = (salonName) => {
  const router = useRouter()
  const { current: today } = useRef(new Date())
  const [selectedDate, setSelectedDate] = useState(today)
  const employeeManager = useEmployeeManager(salonName, selectedDate)
  const { employees, employee, setEmployee } = employeeManager

  const { current: days } = useRef(
    new Array(6).fill(null).reduce(
      (result) => {
        const lastDate = new Date(result.at(-1))
        lastDate.setDate(lastDate.getDate() + 1)
        result.push(lastDate)
        return result
      },
      [today]
    )
  )

  const timeTable = useMemo(
    () =>
      new Array(12).fill(null).reduce((result, _, idx) => {
        const lastDate =
          idx === 0 ? new Date(selectedDate) : new Date(result.at(-1))
        if (idx === 0) {
          lastDate.setHours('09')
          lastDate.setMinutes('00')
          lastDate.setSeconds('00')
        } else {
          lastDate.setHours(lastDate.getHours() + 1)
        }
        result.push(lastDate)
        return result
      }, []),
    [selectedDate]
  )

  const bookSlot = (theSlot) => {
    const slot = theSlot.valueOf()
    const url = `/book/finish?slot=${slot}&employee=${employee}&salon=${salonName}`
    router.push(url)
  }

  return {
    today,
    days,
    selectedDate,
    setSelectedDate,
    timeTable,
    employeeManager,
    bookSlot,
  }
}

export default useBooking
