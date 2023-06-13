'use client'
import { Week } from './Week'
import style from '../calendar.module.scss'

export const MonthView = ({ manager }) => {
  const { month, today, weeks, selectedDay, setSelectedDay } = manager

  return (
    <div className={style.month}>
      {weeks.map((week, idxWeek) => (
        <Week key={idxWeek} week={week} manager={manager} />
      ))}
    </div>
  )
}
