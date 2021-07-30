import { genService } from '../utils/genService'

const baseUrl = process.env.REACT_APP_API_URL

export const getPatients = (token, amount, page) => {
  let url = `${baseUrl}/patient/find/${amount}`
  if (page) {
    url += `/${page}`
  }
  return genService(url, 'get', token, undefined)
}

export const getPatient = (token, id) => {
  const url = `${baseUrl}/patient/${id}`
  return genService(url, 'get', token, undefined)
}

export const savePatient = (token, patient) => {
  const url = `${baseUrl}/patient`
  return genService(url, 'post', token, patient)
}

export const updatePatient = (token, id, patientUpdate) => {
  const url = `${baseUrl}/patient/${id}`
  return genService(url, 'put', token, patientUpdate)
}

export const deletePatient = (token, id) => {
  const url = `${baseUrl}/patient/${id}`
  return genService(url, 'delete', token, undefined)
}
