import { Card } from 'ui'
import BookCalendar from './BookCalendar'
import TimeTable from './TimeTable'
// import EmployeeSelect from './EmployeeSelect'
// import useBooking from './useBooking'

const BookPage = ({ salonName, service }) => {
  const bookingManager = useBooking(salonName)
  const { employeeManager } = bookingManager

  return (
    <Card title={`Book "${service}" at ${salonName}`}>
      <BookCalendar bookingManager={bookingManager} />
      <EmployeeSelect employeeManager={employeeManager} />
      <TimeTable bookingManager={bookingManager} />
    </Card>
  )
}

export default BookPage
