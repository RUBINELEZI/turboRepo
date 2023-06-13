import axios from 'axios'
import queryString from 'query-string'
import useAuth from 'hooks/useAuth'
import CONFIG from 'config'
const { API_URL } = CONFIG.services

const useClient = (baseUrl = API_URL, baseHeaders, noAuth) => {
  const { token, isLoading } = useAuth()

  const GET = async (url, query, headers = baseHeaders) => {
    const { origin } = window.location
    headers = { authorization: `Bearer ${token}`, ...headers, from: origin }
    const uri = `${baseUrl}/${url}`
    const res = await axios.get(uri, { headers })

    return res.data
  }

  const POST = async (url, payload, headers = baseHeaders) => {
    const { origin } = window.location
    headers = { authorization: `Bearer ${token}`, ...headers, from: origin }
    const uri = `${baseUrl}/${url}`
    const res = await axios.post(uri, payload, { headers })
    return res.data
  }

  const DELETE = async (url, payload, headers = baseHeaders) => {
    const { origin } = window.location
    headers = { authorization: `Bearer ${token}`, ...headers, from: origin }
    const uri = `${baseUrl}/${url}`
    const res = await axios.delete(uri, { headers })
    return res.data
  }

  return {
    GET,
    POST,
    DELETE,
    ready: !isLoading,
  }
}

export default useClient
