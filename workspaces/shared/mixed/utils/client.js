import axios from 'axios'
import queryString from 'query-string'

const client = {
  async get(url, req) {
    const options = { withCredentials: true }
    if (req && req.headers && req.headers.cookie) {
      options.headers = {
        Cookie: req.headers.cookie,
      }
    }

    const requestUrl = `/api/${url}`
    const response = await axios.get(requestUrl, options)
    return response.data
  },

  async post(url, data, req) {
    const options = { withCredentials: true }
    if (req) {
      options.headers = {
        Cookie: req.headers.cookie,
      }
    }

    const response = await axios.post(`/api/${url}`, data, options)
    return response.data
  },
}

export default new Proxy(client, {
  get: (target, model) => {
    if (model === 'get') {
      return (url) => target.get(url)
    }
    if (model === 'post') {
      return (url, data) => target.post(url, data)
    }
    return new Proxy(client, {
      get: (target2, resource) => {
        if (['create', 'update'].includes(resource)) {
          return (data) => target.post(`/${model}/${resource}`, data)
        }
        // ['list', 'all', 'one', 'me', ...]
        return ({ req, ...query } = {}) => {
          const qs = queryString.stringify(query)
          return target.get(`${model}/${resource}?${qs}`, req)
        }
      },
    })
  },
})
