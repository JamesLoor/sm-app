import axios from 'axios'

export const genService = (url, type, token, body) => {
  const headers = { 'Authorization': 'Bearer ' + token }
  if (body) {
      return axios[type](url, body, { headers })
  } else {
      return axios[type](url, { headers })
  }
}