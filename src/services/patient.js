import genService from '../utils/genService'

const baseUrl = process.env.REACT_APP_API_URL

export const getPatientListService = (token, amount, page) => {
  let url = `${baseUrl}/patient/find/${amount}`
  if (page) {
    url += `/${page}`
  }
  return genService(url, 'get', token, undefined)
}

export const getPatientService = (token, id) => {
  const url = `${baseUrl}/patient/${id}`
  return genService(url, 'get', token, undefined)
}

export const savePatientService = (token, patient) => {
  const url = `${baseUrl}/patient`
  return genService(url, 'post', token, patient)
}

export const updatePatientService = (token, id, patientUpdate) => {
  const url = `${baseUrl}/patient/${id}`
  return genService(url, 'put', token, patientUpdate)
}

export const deletePatientService = (token, id) => {
  const url = `${baseUrl}/patient/${id}`
  return genService(url, 'delete', token, undefined)
}
