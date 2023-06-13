'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useAuth from 'hooks/useAuth'
import SigninScreen from 'layouts/Screens/Auth/Signin'

const Signin = ({ searchParams }) => {
  const router = useRouter()
  const { status } = useAuth()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push(searchParams.callbackUrl || '/')
    }
  }, [status])

  if (status === 'loading') {
    return null
  }

  return <SigninScreen />
}

Signin.layout = 'auth'

export default Signin
