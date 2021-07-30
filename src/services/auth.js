import axios from 'axios'
import genService from '../utils/genService'

const baseUrl = process.env.REACT_APP_API_URL

export const getFullName = (token) => {
  const url = `${baseUrl}/auth/me`
  return genService(url, 'get', token)
}

export const loginService = ({ email, password }) => {
  if (email && password) {
    const encode = window.btoa(`${email}:${password}`)
    return axios.post(
      `${baseUrl}/auth/sign-in`,
      {},
      {
        headers: {
          Authorization: `Basic ${encode}`,
          'Content-type': 'application/json'
        }
      }
    )
  }
  return axios.post(`${baseUrl}/auth/sign-in`, {})
}
