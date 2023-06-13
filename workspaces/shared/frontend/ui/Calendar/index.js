'use client'
import useCalendarManager from './useCalendarManager'
import cx from 'classnames'
import { Header } from './Header'
import { MonthView } from './MonthView'
import style from './calendar.module.scss'

export const Calendar = () => {
  const manager = useCalendarManager()

  return (
    <div className={style.calendar}>
      <Header manager={manager} />
      <div className={cx(style.body, style[manager.view])}>
        <MonthView manager={manager} />
      </div>
    </div>
  )
}
