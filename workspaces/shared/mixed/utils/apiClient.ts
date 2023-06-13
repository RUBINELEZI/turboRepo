import CONFIG from 'config'
const { API_URL } = CONFIG.services

const apiClient = {
  GET: async (url, options = {}) => {
    const response = await fetch(`${API_URL}/${url}`, options)
    return response.json()
  },
}

export default apiClient
