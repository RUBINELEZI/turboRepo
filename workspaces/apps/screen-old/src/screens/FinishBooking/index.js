import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import client from '@/lib/client'
import Header from './Header'
import UserInfo from './UserInfo'
import PaymentMethod from './PaymentMethod'
import Confirm from './Confirm'
import styles from './finishbooking.module.scss'
import { Keyboard } from 'ui'

const FinishBookingScreen = (props) => {
  const { session, status, salon, employeeId, slot } = props
  const [reservation, setReservation] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState(null)
  const [keyboardValue, setKeyboardValue] = useState('')

  console.log(props)

  const mutation = useMutation({
    mutationFn: (payload) => client.reservations.create(payload),
    onSuccess: (res) => {
      setReservation(res)
    },
  })

  const onChange = (ev) => {
    setPaymentMethod(ev.target.value)
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      paymentMethod,
      // service:
      salon,
      employee: employeeId,
      user: session.user.email,
      slot: new Date(+slot),
    }

    mutation.mutate(payload)
  }

  return (
    <div className={styles.finishBooking}>
      <Header {...props} reservation={reservation} />

      {!reservation && (
        <>
          <UserInfo {...props} />
          <form onChange={onChange} onSubmit={onSubmit}>
            <PaymentMethod {...props} paymentMethod={paymentMethod} />
            <Confirm {...props} />
            <div className={styles.keyboard}>
              <textarea
                defaultValue={keyboardValue}
                cols="30"
                rows="5"
              ></textarea>
              <div>
                <Keyboard onChange={(v) => setKeyboardValue(v)} />
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default FinishBookingScreen
