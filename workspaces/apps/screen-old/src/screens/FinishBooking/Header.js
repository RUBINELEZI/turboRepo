import { Card } from 'ui'
import { Link } from 'ui/form'
import { formatFullDate } from '@/lib/dateUtils'
import styles from './finishbooking.module.scss'

const Header = (props) => {
  const { salon, employee, slot, reservation } = props
  return (
    <Card>
      <div className={styles.header}>
        {reservation ? (
          <h2>Congratulations, your booking is confirmed</h2>
        ) : (
          <h2>Finish your booking:</h2>
        )}
        <h3>{salon}</h3>
        <h3>
          {employee.firstName} {employee.lastName}
        </h3>
        <h3>{formatFullDate(+slot)}</h3>
        {reservation && <h3>Reservation ID: #{reservation._id}</h3>}
        {reservation && <Link href="/calendar">Check your calendar</Link>}
      </div>
    </Card>
  )
}

export default Header
