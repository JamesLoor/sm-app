import axios from 'axios'
const { REACT_APP_API_URL } = process.env

export class Patient {
  token
  headers
  constructor () {
    this.token = localStorage.getItem('Token')
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
    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    }
  }

  getPatient (id) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/patient/' + id
    if (headers) {
      return axios.get(url, { headers })
    } else {
      return axios.get(url)
    }
  }

  savePatient (patient) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/patient'
    if (headers) {
      return axios.post(url, patient, { headers })
    } else {
      return axios.post(url, patient)
    }
  }

  updatePatient(id, patientUpdate) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/patient/' + id
    if (headers) {
      return axios.put(url, patientUpdate, { headers })
    } else {
      return axios.put(url, patientUpdate)
    }
  }

  deletePatient(id) {
    const { headers } = this
    const url = REACT_APP_API_URL + '/patient/' + id
    if (headers) {
      return axios.delete(url, { headers })
    } else {
      return axios.delete(url)
    }
  }

}
