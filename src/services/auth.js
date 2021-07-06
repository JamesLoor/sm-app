import axios from 'axios'
import { config } from 'dotenv'
config()

const { REACT_APP_API_URL } = process.env

export const loginService = (user) => {
  const { email, password } = user

  if (email && password) {
    const encode = window.btoa(email + ':' + password)
    return axios.post(`${REACT_APP_API_URL}/auth/sign-in`, {}, {
      headers: { 'Authorization': 'Basic ' + encode, 'Content-type': "application/json" }
    })
  } else {
    return axios.post(`${REACT_APP_API_URL}/auth/sign-in`, {})
  }
}