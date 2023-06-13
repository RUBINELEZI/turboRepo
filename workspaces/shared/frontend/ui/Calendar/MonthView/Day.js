'use client'
import cx from 'classnames'
import { formatDayName, formatDateOfMonth } from '../dateUtils'
import style from '../calendar.module.scss'

export const Day = ({ day, manager }) => {
  const { today, month, setSelectedDay, selectedDay } = manager
  const isOther = day.getMonth() !== month.getMonth()
  const isToday = day.toString() === today.toString()

  return (
    <div
      className={cx(style.day, isOther && style.other, isToday && style.today)}
      onClick={() => setSelectedDay(day === selectedDay ? null : day)}
    >
      <div className={style.dayName}>{formatDayName(day)}</div>
      <div className={style.dayNumber}>{formatDateOfMonth(day)}</div>
      <div className={style.dayEvents}>
        {day.getDate() % 2 ? (
          <div>
            <span className={style.orange}></span>
            <span className={style.green}></span>
            <span className={style.blue}></span>
            <span className={style.yellow}></span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
