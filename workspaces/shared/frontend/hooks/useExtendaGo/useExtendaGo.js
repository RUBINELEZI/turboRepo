import axios from 'axios'
import useClient from 'hooks/useClient'
import useAuthenticate from './useAuthenticate'
import CONFIG from 'config'
const { POS_URL } = CONFIG.services

const useExtendaGo = () => {
  const { token, refresh, isAuthenticated } = useAuthenticate()
  const { GET, POST, DELETE, ready } = useClient(POS_URL, { token })

  return {
    refresh,
    ready: ready && !!token && isAuthenticated,
    client: { GET, POST, DELETE },
  }
}

export default useExtendaGo
