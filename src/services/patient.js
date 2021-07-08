import { genService } from "../utils/genService"
const { REACT_APP_API_URL } = process.env

export const getPatients = (token, amount, page) => {
  let url = REACT_APP_API_URL + `/patient/find/${amount}`
  if (page) {
    url += '/' + page
  }
  return genService(url, 'get', token, undefined)
}

export const getPatient = (token, id) => {
  const url = REACT_APP_API_URL + '/patient/' + id
  return genService(url, 'get', token, undefined)
}

export const savePatient = (token, patient) => {
  const url = REACT_APP_API_URL + '/patient'
  return genService(url, 'post', token, patient)
}

export const updatePatient = (token, id, patientUpdate) => {
  const url = REACT_APP_API_URL + '/patient/' + id
  return genService(url, 'put', token, patientUpdate)
}

export const deletePatient = (token, id) => {
  const url = REACT_APP_API_URL + '/patient/' + id
  return genService(url, 'delete', token, undefined)
}
