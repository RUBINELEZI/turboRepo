import { signOut } from 'next-auth/react'
import { Card } from 'ui'
import { Link } from 'ui/form'
import SigninScreen from '@/screens/auth/Signin'
import styles from './finishbooking.module.scss'

const UserInfo = (props) => {
  const { session } = props

  return (
    <div className={styles.userInfo}>
      {!session ? (
        <SigninScreen demoUsers={demoUsers} />
      ) : (
        <Card>
          <h4>signed in as:</h4>
          <span>{session.user.email}</span>
          <div>
            <Link onClick={signOut} href="#">
              change user
            </Link>
          </div>
        </Card>
      )}
    </div>
  )
}

export default UserInfo

const demoUsers = [
  {
    email: 'customer1@gmail.com',
    firstName: 'customer1',
    lastName: '',
  },
  {
    email: 'customer2@gmail.com',
    firstName: 'customer2',
    lastName: '',
  },
  {
    email: 'customer3@gmail.com',
    firstName: 'customer3',
    lastName: '',
  },
]
