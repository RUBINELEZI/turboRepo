'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuth from 'hooks/useAuth'
// import Avatar from '@/components/Avatar'
import MenuItem from './MenuItem'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './navbar.module.scss'

const UserMenu = () => {
  const { user, isLoading, status, signIn, signOut } = useAuth()
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={styles.userMenu}>
      <div className={styles.container}>
        <div className={styles.userName}>{user?.email}</div>
        <div className={styles.hamburger} onClick={() => setOpen(open => !open)}>
          <AiOutlineMenu />
          {false && (
            <div className="hidden md:block">
              <Avatar />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <div className="flex cursor-pointer flex-col">
            {status === 'authenticated' ? (
              <>
                <MenuItem onClick={() => setOpen(false) || router.push('/calendar')} label="My Calendar" />
                <MenuItem onClick={signOut} label="Sign Out" />
              </>
            ) : (
              <>
                <MenuItem onClick={signIn} label="Sign In" />
                <MenuItem onClick={() => router.push('/auth/signup')} label="Register" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
