import { useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import CONFIG from 'config'
const { AUTH_URL, API_URL } = CONFIG.services

const useAuth = () => {
  const { data, status } = useSession()
  const token = data?.token?.token

  // const apiClient = useClient(API_URL)
  // const authClient = useClient(AUTH_URL, 'no-auth')

  const { data: user, isLoading } = useQuery(['users', 'me', token], fetchUser)

  const register = async formState => {
    const result = await axios.post(`${AUTH_URL}/register`, formState)
    return result.data
  }

  return {
    register,
    status,
    isLoading: status === 'loading' || isLoading,
    user,
    token,
    signIn,
    signOut,
  }
}

export default useAuth

const fetchUser = async ({ queryKey }) => {
  const [, , token] = queryKey
  if (!token) return null
  const res = await fetch(`${API_URL}/users/me`, {
    headers: { AUTHORIZATION: `bearer ${token}` },
  })

  const user = await res.json()
  return user

  return null
}
