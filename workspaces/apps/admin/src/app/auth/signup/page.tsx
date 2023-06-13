'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useAuth from 'hooks/useAuth'
import SignupScreen from 'layouts/Screens/Auth/Signup'

const Signin = ({ searchParams }) => {
  const router = useRouter()
  const { status } = useAuth()

  useEffect(() => {
    if (status === 'authenticated') {
      window.location.href = searchParams.callbackUrl || '/'
    }
  }, [status])

  if (status === 'loading') {
    return null
  }

  return (
    <div className="pt-[100px] w-[50%] mx-auto">
      <SignupScreen />
    </div>
  )
}

Signin.layout = 'auth'

export default Signin
