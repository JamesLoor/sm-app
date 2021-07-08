import { genService } from "../utils/genService"
const { REACT_APP_API_URL } = process.env

export class Patient {
  token
  headers
  constructor () {
    this.token = localStorage.getItem('token')
    if (this.token) {
      this.headers = { 'Authorization': 'Bearer ' + this.token }
    }
  }

  getPatients (amount, page) {
    const { headers } = this
    let url = REACT_APP_API_URL + `/patient/find/${amount}`
    if (page) {
      url += '/' + page
    }
    return genService(url, 'get', headers, undefined)
  }

  getPatient (id) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/patient/' + id
    return genService(url, 'get', headers, undefined)
  }

  savePatient (patient) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/patient'
    return genService(url, 'post', headers, patient)
  }

  updatePatient(id, patientUpdate) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/patient/' + id
    return genService(url, 'put', headers, patientUpdate)
  }

  deletePatient(id) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/patient/' + id
    return genService(url, 'delete', headers, undefined)
  }

}
