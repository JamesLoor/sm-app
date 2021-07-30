import { genService } from '../utils/genService'

const baseUrl = process.env.REACT_APP_API_URL

export const getDocuments = (token, patientID, amount, page) => {
  let url = `${baseUrl}/document/find/${patientID}/${amount}`
  if (page) {
    url += `/${page}`
  }
  return genService(url, 'get', token, undefined)
}

export const getDocument = (token, patientID, documentID) => {
  const url = `${baseUrl}/document/${patientID}/${documentID}`
  return genService(url, 'get', token, undefined)
}

export const getDocumentsByType = (token, patientID, type, amount, page) => {
  let url = `${baseUrl}/document/type/${patientID}/${type}/${amount}`
  if (page) {
    url += `/${page}`
  }
  return genService(url, 'get', token, undefined)
}

export const getTypesOfDocuments = (token, patientID) => {
  const url = `${baseUrl}/document/get/types/${patientID}`
  return genService(url, 'get', token, undefined)
}

export const saveDocument = (token, patientID, document) => {
  const url = `${baseUrl}/document/${patientID}`
  return genService(url, 'post', token, document)
}

export const updateDocument = (
  token,
  patientID,
  documentID,
  documentUpdate
) => {
  const url = `${baseUrl}/document/${patientID}/${documentID}`
  return genService(url, 'put', token, documentUpdate)
}

export const deleteDocument = (token, patientID, documentID) => {
  const url = `${baseUrl}/document/${patientID}/${documentID}`
  return genService(url, 'delete', token, undefined)
}
