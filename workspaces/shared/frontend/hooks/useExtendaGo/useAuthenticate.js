import { useState, useEffect, useRef } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import useAuth from 'hooks/useAuth'
import useClient from 'hooks/useClient'
import CONFIG from 'config'
const { POS_URL } = CONFIG.services
const TOKEN_DURATION = 50
const HOUR = 60 * 60 * 1000

const useAuthenticate = () => {
  const [token, setToken] = useState(null)
  const queryClient = useQueryClient()
  const { status } = useAuth()
  const client = useClient(POS_URL)
  const timeoutID = useRef()

  const refresh = (timeout = 0) => {
    // const mins = Math.floor(timeout / 1000 / 60)
    // const secs = Math.floor((timeout / 1000) % 60)
    // console.log(`useExtendaGO - setting refresh timeout for ${mins}m${secs}s`)
    timeoutID.current = setTimeout(() => setToken(null), timeout)
  }

  const { data: auth, isLoading } = useQuery(['EXTENDA', 'TOKEN'], {
    queryFn: () => client.POST('authenticate'),
    enabled: !token && status === 'authenticated',
    onSuccess: auth => {
      const { access_token: token, expires_in } = auth
      const expires = new Date()
      expires.setMinutes(expires.getMinutes() + TOKEN_DURATION)
      setToken(token)
      refresh(TOKEN_DURATION * 60 * 1000)
    },
  })

  return { token, refresh, isAuthenticated: status === 'authenticated' }
}

export default useAuthenticate
