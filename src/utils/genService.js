import axios from 'axios'

export const genService = (url, type, headers, body) => {
  if (headers) {
    if (body) {
        return axios[type](url, body, { headers })
    } else {
        return axios[type](url, { headers })
    }
  } else {
    if (body) {
        return axios[type](url, body)
    } else {
        return axios[type](url)
    }
  }
}