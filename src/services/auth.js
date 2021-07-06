import axios from 'axios'
import { config } from 'dotenv'
config()

export const loginService = (user) => {
  const { email, password } = user

  if (email && password) {
    const encode = window.btoa(email + ':' + password)
    return axios.post('http://localhost:3500/auth/sign-in', {}, {
      headers: { 'Authorization': 'Basic ' + encode, 'Content-type': "application/json" }
    })
  } else {
    return axios.post('http://localhost:3500/auth/sign-in', {})
  }
}