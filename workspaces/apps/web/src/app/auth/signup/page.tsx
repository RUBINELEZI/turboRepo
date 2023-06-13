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
    <main className="p-3 w-full lg:w-[50%] xl:w-[35%] sm:p-5 mx-auto">
      <SignupScreen />
    </main>
  )
}

Signin.layout = 'auth'

export default Signin
