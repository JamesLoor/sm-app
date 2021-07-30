import axios from 'axios'

const genService = (url, type, token, body) => {
  const headers = { Authorization: `Bearer ${token}` }
  if (body) {
    return axios[type](url, body, { headers })
  }
  return axios[type](url, { headers })
}

export default genService
