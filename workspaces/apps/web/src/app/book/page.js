import Card from 'ui/Card'
import BookCalendar from './BookCalendar'
import TimeTable from './TimeTable'
import EmployeeSelect from './EmployeeSelect'
import apiClient from 'utils/apiClient'

const BookPage = async ({ searchParams }) => {
  const { salon, service } = searchParams
  const employees = await apiClient.GET(`employees?salon=${salon}`)
  return (
    <Card title={`Book "${service}" at ${salon}`}>
      {/* <BookCalendar bookingManager={bookingManager} /> */}
      <EmployeeSelect employees={employees} />
      {/* <TimeTable bookingManager={bookingManager} /> */}
    </Card>
  )
}

export default BookPage
