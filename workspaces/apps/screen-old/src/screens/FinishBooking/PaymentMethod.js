import { Card } from 'ui'
import { Checkbox } from 'ui/form'
import styles from './finishbooking.module.scss'

const PaymentMethod = ({ session, paymentMethod }) => {
  if (!session) {
    return null
  }
  return (
    <Card>
      <h4>PaymentMethod</h4>
      <div className={styles.radiosContainer}>
        <Checkbox
          type="radio"
          name="paymentMethod"
          label="Paypal"
          value="paypal"
          defaultChecked={paymentMethod === 'paypal'}
        />
        <Checkbox
          type="radio"
          name="paymentMethod"
          label="Credit Card"
          value="credit-card"
          defaultChecked={paymentMethod === 'credit-card'}
        />
        <Checkbox
          type="radio"
          name="paymentMethod"
          label="Coupon"
          value="coupon"
          defaultChecked={paymentMethod === 'coupon'}
        />
      </div>
    </Card>
  )
}

export default PaymentMethod
