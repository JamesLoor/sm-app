import axios from 'axios'
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
    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    }
  }

  getDocument (patientID, documentID) {
    const { headers } = this
    const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    }
  }

  getDocumentsByType (patientID, type, amount, page) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/type/${patientID}/${type}/${amount}`
    if (page) {
      url += '/' + page
    }
    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    }
  }

  getTypesOfDocuments (patientID) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/document/get/types/${patientID}`
    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    } 
  }

  saveDocument (patientID, document) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/document/' + patientID
    if (headers) {
      return axios.post(url, document, { headers })
    } else {
      return axios.post(url, document)
    }
  }

  updateDocument (patientID, documentID, documentUpdate) {
    const { headers } = this
    const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
    if (headers) {
      return axios.put(url, documentUpdate, { headers })
    } else {
      return axios.put(url, documentUpdate)
    }
  }

  deleteDocument (patientID, documentID) {
    const { headers } = this
    const url = REACT_APP_API_URL + `/document/${patientID}/${documentID}`
    if (headers) {
      return axios.delete(url, documentUpdate, { headers })
    } else {
      return axios.delete(url, documentUpdate)
    }
  }

}