'use client'
import cx from 'classnames'
import { formatDayYear } from './dateUtils'
import style from './calendar.module.scss'

export const Header = ({ manager }) => {
  const { month, changeMonth, view, changeView } = manager
  return (
    <div>
      <div className={style.header}>
        <div className={style.left} onClick={() => changeMonth(-1)}></div>
        <div className={style.title}>
          <h1>{formatDayYear(month)}</h1>
        </div>
        <div className={style.right} onClick={() => changeMonth(1)}></div>
      </div>
      <nav className={style.viewSelector}>
        <a onClick={changeView} className={cx(view === 'month' && style.selected)}>
          month
        </a>
        <a onClick={changeView} className={cx(view === 'week' && style.selected)}>
          week
        </a>
        <a onClick={changeView} className={cx(view === 'day' && style.selected)}>
          day
        </a>
      </nav>
    </div>
  )
}
