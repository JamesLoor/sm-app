import { genService } from '../utils/genService'
const { REACT_APP_API_URL } = process.env

export class Document {
  token
  headers
  constructor () {
    this.token = localStorage.getItem('Token')
    if (this.token) {
      this.headers = { 'Authorization': 'Bearer ' + this.token }
    }
  }

  getDocuments (patientID, amount, page) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/find/${patientID}/${amount}`
    if (page) {
      url += '/' + page
    }
    return genService(url, 'get', headers, undefined)
  }

  getDocument (patientID, documentID) {
    const { headers } = this
    const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
    return genService(url, 'get', headers, undefined)
  }

  getDocumentsByType (patientID, type, amount, page) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/type/${patientID}/${type}/${amount}`
    if (page) {
      url += '/' + page
    }
    return genService(url, 'get', headers, undefined)
  }

  getTypesOfDocuments (patientID) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/get/types/${patientID}`
    return genService(url, 'get', headers, undefined)
  }

  saveDocument (patientID, document) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/document/' + patientID
    return genService(url, 'post', headers, document)
  }

  updateDocument (patientID, documentID, documentUpdate) {
    const { headers } = this
    const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
    return genService(url, 'put', headers, documentUpdate)
  }

  deleteDocument (patientID, documentID) {
    const { headers } = this
    const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
    return genService(url, 'delete', headers, undefined)
  }

}