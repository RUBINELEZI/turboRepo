import axios from 'axios'
import { Router } from 'express'
import CONFIG from 'config'
const { EXTENDA_API } = CONFIG

const extendaRouter = new Router()

extendaRouter.post('/authenticate', async (req, res) => {
  if (!req.user) {
    return res.status(400).send({ error: 'Unauthorized' })
  }
  const payload = {
    grant_type: 'client_credentials',
    scopes: 'public',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  }

  const response = await axios
    .post(`${EXTENDA_API}/auth/token`, payload)
    .then(response => res.send(response.data))
    .catch(errorHandler(req, res))
})

extendaRouter.get('*', async (req, res) => {
  const { token, from } = req.headers
  // console.log({ from })
  const headers = { authorization: `Bearer ${token}` }
  const url = `${EXTENDA_API}${req.url}?sort=name`
  // console.log('getting', url)
  axios
    .get(url, { headers })
    .then(response => res.send(response.data))
    .catch(errorHandler(req, res))
})

extendaRouter.post('*', async (req, res) => {
  const { body: payload } = req
  const { token } = req.headers
  const headers = { authorization: `Bearer ${token}` }
  const url = `${EXTENDA_API}${req.url}`
  // console.log('posting', url)
  axios
    .post(url, payload, { headers })
    .then(response => res.send(response.data))
    .catch(errorHandler(req, res))
})

extendaRouter.delete('*', async (req, res) => {
  const { token } = req.headers
  const headers = { authorization: `Bearer ${token}` }
  const url = `${EXTENDA_API}${req.url}`
  // console.log('deleting', url)
  axios
    .delete(url, { headers })
    .then(response => res.send(response.data))
    .catch(errorHandler(req, res))
})

export default extendaRouter

const CLIENT_ID = 'ae43695f0f35d2a03fa1d3df46295859'
const CLIENT_SECRET =
  'b5c74941871b0217f8680af4ae1fa7fffc39d37b6b9a5a9582b2f16d4578f37efd821a7f8d02e437a089b55944f992013c1874c35766127b45944632c5c20361'

const errorHandler = (req, res) => err => {
  console.error('error getting')
  // console.error(err.response.status, err.code, err.response)
  // console.error(err.response.data)
  // console.error(Object.keys(err.response))
  const { error_code: status, error } = err.response.data
  res.status(status).send({ status, error, code: err.code })
}
