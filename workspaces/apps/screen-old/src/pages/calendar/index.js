import { signIn } from 'next-auth/react'
import { Calendar } from 'ui'

const index = ({ session, status }) => {
  if (status === 'loading') {
    return null
  }

  if (status === 'unauthenticated') {
    signIn()
  }

  return (
    <div>
      <Calendar />
    </div>
  )
}

export default index
