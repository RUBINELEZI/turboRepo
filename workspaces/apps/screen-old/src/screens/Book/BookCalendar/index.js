import cx from 'classnames'
import { formatDateOfMonth, formatDayName, formatMonth } from '@/lib/dateUtils'
import styles from './bookcalendar.module.scss'

const BookCalendar = ({ bookingManager }) => {
  const { today, days, selectedDate, setSelectedDate } = bookingManager
  return (
    <div className={styles.bookCalendar}>
      <div className={styles.days}>
        <ul>
          {days.map((day) => (
            <li
              onClick={() => setSelectedDate(day)}
              className={cx(day === selectedDate && styles.selected)}
              key={day.toString()}
            >
              <div className={styles.dayOfWeek}>{formatDayName(day)}</div>
              <div className={styles.date}>{formatDateOfMonth(day)}</div>
              <div className={styles.month}>{formatMonth(day)}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BookCalendar
