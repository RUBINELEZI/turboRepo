import { Card } from 'ui'
import { Button } from 'ui/form'
import styles from './finishbooking.module.scss'

const Confirm = ({ session }) => {
  if (!session) {
    return null
  }
  return (
    <Card>
      <Button>Confirm</Button>
    </Card>
  )
}

export default Confirm
