import genService from '../utils/genService'

const baseUrl = process.env.REACT_APP_API_URL

export const getFisicData = (token, patientID) => {
  const url = `${baseUrl}/document/fisic/${patientID}`
  return genService(url, 'get', token, undefined)
}

export const getOneFisicData = (token, patientID, fisicDataTitle) => {
  const url = `${baseUrl}/document/fisic/${patientID}/${fisicDataTitle}`
  return genService(url, 'get', token, undefined)
}

export const saveFisicData = (token, patientID, info) => {
  const url = `${baseUrl}/document/fisic/${patientID}`
  return genService(url, 'post', token, info)
}

export const updateFisicData = (token, patientID, fisicDataTitle, data) => {
  const url = `${baseUrl}/document/fisic/${patientID}/${fisicDataTitle}`
  return genService(url, 'put', token, data)
}

export const deleteFisicData = (token, patientID, fisicDataTitle) => {
  const url = `${baseUrl}/document/fisic/${patientID}/${fisicDataTitle}`
  return genService(url, 'delete', token, undefined)
}
