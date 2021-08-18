/* eslint-disable no-console */
import axios from 'axios'

// const genService = (url, type, token, body) => {
//   const headers = { Authorization: `Bearer ${token}` }
//   if (body) {
//     try {
//       return axios[type](url, body, { headers })
//     } catch (e) {
//       console.log(e)
//     }
//   }
//   try {
//     return axios[type](url, { headers })
//   } catch (e) {
//     console.log(e)
//   }
//   return null
// }

const genService = async (url, type, token, body) => {
  const headers = { Authorization: `Bearer ${token}` }
  if (body) {
    try {
      const caca = await axios[type](url, body, { headers })
      await caca.interceptors.response.use(response => {
        if (response.status === 401) console.log('caca')
        return response
      })
      return caca
    } catch (e) {
      console.log(e)
    }
  }
  try {
    const caca = axios[type](url, { headers })
    axios.interceptors.response.use(response => {
      if (response.status === 401) console.log('caca')
      return response
    })
    return caca
  } catch (e) {
    console.log(e)
  }
  return null
}



export default genService
