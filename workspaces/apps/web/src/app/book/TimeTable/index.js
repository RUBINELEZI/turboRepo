import { formatTime, formatDayYear, formatDateOfMonth } from 'utils/dateUtils'
import styles from './timetable.module.scss'

const TimeTable = ({ bookingManager }) => {
  const { timeTable, bookSlot } = bookingManager
  return (
    <ul className={styles.timeTable}>
      {timeTable.map((slot) => (
        <li key={slot.toString()}>
          <span>
            {formatDateOfMonth(slot)}, {formatDayYear(slot)} -{' '}
            {formatTime(slot)}
          </span>
          <button onClick={() => bookSlot(slot)}>Book</button>
        </li>
      ))}
    </ul>
  )
}

export default TimeTable
