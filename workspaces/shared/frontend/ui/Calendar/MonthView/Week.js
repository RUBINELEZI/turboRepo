'use client'
import cx from 'classnames'
import { Day } from './Day'
import style from '../calendar.module.scss'

export const Week = ({ week, manager }) => {
  const { month, today, selectedDay, setSelectedDay } = manager

  return (
    <div className={style.week}>
      {week.map(day => (
        <Day key={day.getDate()} day={day} manager={manager} />
      ))}
      <div className={cx(style.details, week.includes(selectedDay) ? style.in : '')}>
        <div className={style.arrow}></div>
      </div>
    </div>
  )
}
