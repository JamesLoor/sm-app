import { genService } from '../utils/genService'
const { REACT_APP_API_URL } = process.env

export const getDocuments = (token, patientID, amount, page) => {
  let url = REACT_APP_API_URL + `/document/find/${patientID}/${amount}`
  if (page) {
    url += '/' + page
  }
  return genService(url, 'get', token, undefined)
}

export const getDocument = (token, patientID, documentID) => {
  const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
  return genService(url, 'get', token, undefined)
}

export const getDocumentsByType = (token, patientID, type, amount, page) => {
  let url = REACT_APP_API_URL + `/document/type/${patientID}/${type}/${amount}`
  if (page) {
    url += '/' + page
  }
  return genService(url, 'get', token, undefined)
}

export const getTypesOfDocuments = (token, patientID) => {
  let url = REACT_APP_API_URL + `/document/get/types/${patientID}`
  return genService(url, 'get', token, undefined)
}

export const saveDocument = (token, patientID, document) => {
  const url = REACT_APP_API_URL + '/document/' + patientID
  return genService(url, 'post', token, document)
}

export const updateDocument = (token, patientID, documentID, documentUpdate) => {
  const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
  return genService(url, 'put', token, documentUpdate)
}

export const deleteDocument = (token, patientID, documentID) => {
  const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
  return genService(url, 'delete', token, undefined)
}