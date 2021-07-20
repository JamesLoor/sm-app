import { genService } from '../utils/genService'
const { REACT_APP_API_URL } = process.env

export const getFisicData = (token, patientID) => {
  let url = REACT_APP_API_URL + `/document/fisic/${patientID}`
  return genService(url, 'get', token, undefined)
}

export const getOneFisicData = (token, patientID, fisicDataTitle) => {
  let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
  return genService(url, 'get', token, undefined)
}

export const saveFisicData = (token, patientID, info) => {
  let url = REACT_APP_API_URL + `/document/fisic/${patientID}`
  return genService(url, 'post', token, info)
}

export const updateFisicData = (token, patientID, fisicDataTitle, data) => {
  let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
  return genService(url, 'put', token, data)
}

export const deleteFisicData = (token, patientID, fisicDataTitle) => {
  let url = REACT_APP_API_URL + `/document/fisic/${patientID}/${fisicDataTitle}`
  return genService(url, 'delete', token, undefined)
}
