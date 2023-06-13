import { useState, useRef, useMemo } from 'react'
import getWeeks from './getWeeks'
import { firstOfMonth, addMonths } from './dateUtils'

const useCalendarManager = () => {
  const [view, setView] = useState('month')
  const { current: today } = useRef(new Date())
  const [selectedDay, setSelectedDay] = useState(null)
  const [month, setMonth] = useState(firstOfMonth(today))

  const weeks = useMemo(() => getWeeks(month), [month])

  const changeMonth = val => setMonth(month => addMonths(month, val))

  const changeView = ev => {
    setView(ev.target.textContent.toLowerCase())
  }

  return { view, today, weeks, selectedDay, month, setSelectedDay, changeMonth, changeView }
}

export default useCalendarManager
